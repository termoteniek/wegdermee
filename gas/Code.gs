/**
 * Weg der Mee — booking form mailer
 *
 * Deploy as Web App (Execute as: Me, Who has access: Anyone).
 * Set FORM_SECRET in Project Settings → Script properties.
 *
 * Photos are optional. The site sends up to 10 JPEG files as base64 in
 * payload.photos. Redeploy this script (new version) after changing it,
 * otherwise uploads are dropped.
 */

const RECIPIENT_EMAIL = 'info@wegdermee.com';

const HOURLY_SERVICES = ['Verhuizingen', 'Transport'];

const CREW_LABELS = {
  '2': '2 man',
  '3': '3 man',
  '4': '4 man',
};

const MAX_PHOTOS = 10;
const MAX_PHOTO_CHARS = 1400000;

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    validateSecurity(payload);

    if (isHoneypotTriggered(payload)) {
      return jsonResponse({ success: true });
    }

    validatePayload(payload);

    const photos = buildPhotoBlobs(payload.photos);
    const subject = buildSubject(payload);
    const body = buildBody(payload, photos.length);
    const mail = {
      to: RECIPIENT_EMAIL,
      replyTo: String(payload.email).trim(),
      subject: subject,
      body: body,
    };

    if (photos.length) {
      mail.attachments = photos;
    }

    MailApp.sendEmail(mail);

    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({
      success: false,
      error: error.message || String(error),
    });
  }
}

function validateSecurity(payload) {
  const secret = PropertiesService.getScriptProperties().getProperty('FORM_SECRET');

  if (!secret || payload.token !== secret) {
    throw new Error('Verzenden mislukt. Probeer het opnieuw of bel ons.');
  }
}

function isHoneypotTriggered(payload) {
  return String(payload._honeypot || '').trim().length > 0;
}

function isHourlyService(service) {
  return HOURLY_SERVICES.indexOf(String(service || '').trim()) !== -1;
}

function validatePayload(data) {
  const required = [
    'voornaam',
    'familienaam',
    'email',
    'phone',
    'straatnaam',
    'huisnummer',
    'postcode',
    'gemeente',
    'service',
    'date',
    'time',
  ];

  for (var i = 0; i < required.length; i++) {
    var field = required[i];
    if (!String(data[field] || '').trim()) {
      throw new Error('Ontbrekend veld: ' + field);
    }
  }

  if (isHourlyService(data.service)) {
    var hourlyRequired = ['crew', 'startAddress', 'deliveryAddress'];
    for (var j = 0; j < hourlyRequired.length; j++) {
      var hourlyField = hourlyRequired[j];
      if (!String(data[hourlyField] || '').trim()) {
        throw new Error('Ontbrekend veld: ' + hourlyField);
      }
    }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.email).trim())) {
    throw new Error('Ongeldig e-mailadres');
  }
}

function buildSubject(data) {
  const name = [data.voornaam, data.familienaam].filter(Boolean).join(' ');
  return 'Nieuwe afspraakaanvraag — ' + name + ' (' + data.service + ')';
}

function formatCrew(crew) {
  var key = String(crew || '').trim();
  return CREW_LABELS[key] || key || '—';
}

function sanitizePhotoName(name, index) {
  var base = String(name || '')
    .replace(/\.[^.]+$/, '')
    .replace(/[^A-Za-z0-9_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 40);

  if (!base) base = 'foto-' + (index + 1);
  return base + '.jpg';
}

function buildPhotoBlobs(photos) {
  if (photos == null || photos === '') return [];
  if (!Array.isArray(photos)) throw new Error("Ongeldige foto's");
  if (photos.length > MAX_PHOTOS) throw new Error("Te veel foto's");

  var blobs = [];

  for (var i = 0; i < photos.length; i++) {
    var photo = photos[i] || {};
    if (String(photo.type || '') !== 'image/jpeg') {
      throw new Error('Ongeldig fototype');
    }

    var raw = String(photo.data || '')
      .replace(/^data:[^;]+;base64,/, '')
      .replace(/\s/g, '');

    if (!raw || raw.length > MAX_PHOTO_CHARS || !/^[A-Za-z0-9+/=]+$/.test(raw)) {
      throw new Error("Ongeldige foto");
    }

    blobs.push(
      Utilities.newBlob(Utilities.base64Decode(raw), 'image/jpeg', sanitizePhotoName(photo.name, i))
    );
  }

  return blobs;
}

function buildBody(data, photoCount) {
  const address = [data.straatnaam, data.huisnummer, data.postcode, data.gemeente]
    .filter(Boolean)
    .join(', ');

  const hourly = isHourlyService(data.service);

  const lines = [
    'Nieuwe afspraakaanvraag via wegdermee.com',
    '',
    '--- Contact ---',
    'Naam: ' + data.voornaam + ' ' + data.familienaam,
    'E-mail: ' + data.email,
    'Telefoon: ' + data.phone,
    'Adres: ' + address,
    '',
    '--- Afspraak ---',
    'Dienst: ' + data.service,
  ];

  if (hourly) {
    lines.push('Hoeveel man: ' + formatCrew(data.crew));
    lines.push('Startadres: ' + (String(data.startAddress || '').trim() || '—'));
    lines.push('Leveradres: ' + (String(data.deliveryAddress || '').trim() || '—'));
  } else {
    lines.push('Hoeveelheid: ' + (String(data.volume || '').trim() || '—'));
  }

  lines.push('Datum: ' + data.date);
  lines.push('Tijd: ' + data.time);
  lines.push('');
  lines.push('--- Beschrijving ---');
  lines.push(data.description ? String(data.description).trim() : '—');
  lines.push('');
  lines.push("Foto's: " + (photoCount ? photoCount + ' bijlage(n)' : 'geen'));
  lines.push('');
  lines.push('---');
  lines.push(
    'Verzonden op: ' +
      Utilities.formatDate(new Date(), 'Europe/Brussels', 'dd/MM/yyyy HH:mm')
  );

  return lines.join('\n');
}

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}
