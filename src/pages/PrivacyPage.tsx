import { Link } from 'react-router-dom'
import { LegalDocument, LegalList, LegalSection } from '../components/legal/LegalDocument'
import { business, SITE_URL } from '../lib/site'

export function PrivacyPage() {
  return (
    <LegalDocument title="Privacyverklaring" updated="12 juli 2026">
      <LegalSection title="1. Over deze verklaring">
        <p>
          Wegdermee hecht groot belang aan de bescherming van uw persoonsgegevens en uw privacy.
        </p>
        <p>
          In deze privacyverklaring beschrijven wij op welke manier wij gegevens verzamelen,
          verwerken en beveiligen wanneer u onze website raadpleegt of een beroep doet op onze
          diensten.
        </p>
        <p>
          Door onze website te gebruiken of klant te worden bij ons, gaat u akkoord met de
          verwerking van uw gegevens zoals uiteengezet in dit document.
        </p>
      </LegalSection>

      <LegalSection title="2. Welke gegevens verwerken wij?">
        <p>In het kader van onze activiteiten kunnen wij onder meer volgende gegevens verwerken:</p>
        <LegalList
          items={[
            'Volledige naam',
            'E-mailadres',
            'Telefoonnummer',
            'Adres (voor ophalingen, ontruimingen of verhuizingen)',
            'Betaalinformatie (indien van toepassing)',
            'Eventuele aanvullende informatie die u vrijwillig verstrekt',
          ]}
        />
      </LegalSection>

      <LegalSection title="3. Hoe komen wij aan uw gegevens?">
        <p>Wij verkrijgen persoonsgegevens onder andere op volgende manieren:</p>
        <LegalList
          items={[
            'Via formulieren op onze website of offerteaanvragen',
            'Via e-mail, telefoon, sms of berichten via sociale media',
            'Automatisch via cookies of vergelijkbare technologieën tijdens uw bezoek aan onze website',
            'Door interacties met onze diensten, zoals het plannen van afspraken en het indienen van serviceverzoeken',
          ]}
        />
      </LegalSection>

      <LegalSection title="4. Waarvoor gebruiken wij uw gegevens?">
        <p>Wij gebruiken uw persoonsgegevens om:</p>
        <LegalList
          items={[
            'Onze diensten uit te voeren en te verbeteren (rommelophaal, volledige ontruiming, werf opruiming, kleine verhuizingen en transport)',
            'Uw aanvragen, afspraken en betalingen te behandelen',
            'Met u te communiceren over uw opdrachten, planning en opvolging',
            'Te voldoen aan onze wettelijke en administratieve verplichtingen',
            'U, indien u daarvoor uitdrukkelijk toestemming heeft gegeven, relevante promoties of informatie te bezorgen',
          ]}
        />
      </LegalSection>

      <LegalSection title="5. Hoe beschermen wij uw gegevens?">
        <p>
          Wij treffen passende technische en organisatorische maatregelen om uw persoonsgegevens
          te beschermen tegen ongeoorloofde toegang, verlies, misbruik of diefstal.
        </p>
        <p>Concreet onder meer:</p>
        <LegalList
          items={[
            'Een beveiligde SSL-verbinding op onze website',
            'Het gebruik van beveiligde betaalmethoden waar van toepassing',
          ]}
        />
        <p>
          Geen enkel systeem kan evenwel volledige veiligheid garanderen. Absolute bescherming
          kan daarom niet worden gegarandeerd.
        </p>
      </LegalSection>

      <LegalSection title="6. Doorgeven aan derden">
        <p>
          Wij verkopen uw persoonsgegevens niet aan derden. Doorgeven kan enkel gebeuren aan:
        </p>
        <LegalList
          items={[
            'Dienstverleners die ons ondersteunen bij onze activiteiten (bijvoorbeeld betalingsverwerkers of IT-partners)',
            'Autoriteiten of derden wanneer de wet of een gerechtelijke procedure ons daartoe verplicht',
            'Partners of instanties die betrokken zijn bij fraudepreventie en veiligheid',
          ]}
        />
        <p>
          <strong>Belangrijk:</strong> telefoonnummers en e-mailadressen die wij verzamelen voor
          communicatie over uw opdracht worden niet verkocht of doorgegeven aan derden voor hun
          eigen marketingdoeleinden.
        </p>
      </LegalSection>

      <LegalSection title="7. Uw rechten">
        <p>Als betrokkene heeft u onder AVG het recht om:</p>
        <LegalList
          items={[
            'Inzage te krijgen in de persoonsgegevens die wij van u bewaren',
            'Onjuiste of onvolledige gegevens te laten corrigeren of bijwerken',
            'Verwijdering van uw gegevens te vragen, binnen de grenzen van wettelijke en contractuele verplichtingen',
            'U uit te schrijven voor promotionele communicatie',
          ]}
        />
        <p>
          Om uw rechten uit te oefenen of een vraag te stellen, kunt u contact opnemen via{' '}
          <a href={`mailto:${business.email}`} className="text-ink underline hover:text-accent">
            {business.email}
          </a>{' '}
          of{' '}
          <a href={`tel:${business.phone}`} className="text-ink underline hover:text-accent">
            {business.phoneDisplay}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="8. Cookies">
        <p>
          Onze website maakt gebruik van cookies en vergelijkbare technologieën om het gebruiksgemak
          te verbeteren en onze dienstverlening te optimaliseren.
        </p>
        <p>
          U kunt cookies uitschakelen via de instellingen van uw browser. Houd er rekening mee dat
          bepaalde onderdelen van de website daardoor minder goed of niet meer kunnen functioneren.
        </p>
      </LegalSection>

      <LegalSection title="9. Contact">
        <p>Voor vragen over deze privacyverklaring of over de verwerking van uw gegevens:</p>
        <LegalList
          items={[
            `E-mail: ${business.email}`,
            `Telefoon: ${business.phoneDisplay}`,
            `Website: ${SITE_URL}`,
            'Ondernemingsnummer: 1039.278.883',
            `Werkgebied: ${business.regions.join(', ')}`,
          ]}
        />
      </LegalSection>

      <LegalSection title="10. Wijzigingen">
        <p>
          Wij behouden ons het recht voor om deze privacyverklaring te wijzigen. De meest recente
          versie wordt steeds gepubliceerd op {SITE_URL}/privacy.
        </p>
        <p>
          Wanneer u onze website of diensten blijft gebruiken na een wijziging, wordt u geacht
          akkoord te gaan met de bijgewerkte privacyverklaring.
        </p>
        <p>
          Zie ook onze{' '}
          <Link to="/algemene-voorwaarden" className="text-ink underline hover:text-accent">
            algemene voorwaarden
          </Link>
          .
        </p>
      </LegalSection>
    </LegalDocument>
  )
}
