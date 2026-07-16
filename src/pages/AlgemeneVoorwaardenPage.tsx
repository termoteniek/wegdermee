import { Link } from 'react-router-dom'
import { LegalDocument, LegalList, LegalSection } from '../components/legal/LegalDocument'
import { business, SITE_URL } from '../lib/site'

export function AlgemeneVoorwaardenPage() {
  return (
    <LegalDocument title="Algemene voorwaarden" updated="12 juli 2026">
      <LegalSection title="1. Algemeen">
        <p>
          Deze algemene voorwaarden zijn van toepassing op alle bezoekers, klanten en gebruikers
          van onze website en van onze diensten, waaronder ophalingen, rommelophaal, ontruimingen,
          werf opruiming, kleine verhuizingen, transport en aanverwante activiteiten (
          <Link to="/#diensten" className="text-ink underline hover:text-accent">
            diensten
          </Link>
          ).
        </p>
        <p>
          Door onze website te gebruiken of onze diensten te boeken, verklaart u zich akkoord met
          deze voorwaarden. Indien u niet akkoord gaat, dient u geen gebruik te maken van onze
          diensten.
        </p>
      </LegalSection>

      <LegalSection title="2. Gegevens van de ondernemer">
        <LegalList
          items={[
            'Wegdermee',
            'Onderneming in inboedels en rommelophaal',
            `E-mail: ${business.email}`,
            `Telefoon: ${business.phoneDisplay}`,
            'Ondernemingsnummer: 1039.278.883',
            'BTW-nummer: BE 1039.278.883',
            `Website: ${SITE_URL}`,
            `Werkgebied: ${business.regions.join(', ')}`,
          ]}
        />
      </LegalSection>

      <LegalSection title="3. Ons aanbod">
        <p>
          Wij verzorgen de ophaling van huishoudelijke en bedrijfsgoederen, volledige ontruimingen,
          werf opruiming, kleine verhuizingen en transport. U hoeft uw spullen in principe niet te
          sorteren; wij zorgen voor correcte afvoer conform de geldende regelgeving.
        </p>
        <p>
          Wij behouden ons het recht voor om onze diensten te wijzigen, tijdelijk te schorsen of
          stop te zetten zonder voorafgaande kennisgeving.
        </p>
      </LegalSection>

      <LegalSection title="4. Wie mag onze diensten gebruiken?">
        <p>U dient minstens 18 jaar oud te zijn om gebruik te maken van onze diensten.</p>
        <p>
          U verbindt zich ertoe onze diensten niet te gebruiken voor illegale doeleinden of voor
          het afvoeren van verboden materialen (zoals gevaarlijk, chemisch of medisch afval).
        </p>
      </LegalSection>

      <LegalSection title="5. Offertes, prijs en betaling">
        <LegalList
          items={[
            "Offertes worden opgesteld op basis van de informatie en foto's die de klant verstrekt.",
            'De uiteindelijke prijs op de factuur kan hoger of lager uitvallen indien ter plaatse blijkt dat het volume, gewicht, soort goederen of toegankelijkheid afwijkt van de situatie zoals voorgesteld door de klant.',
            'Een offerte wordt als definitief en bindend beschouwd zodra de klant deze bevestigt, inclusief via sms, WhatsApp, Messenger, e-mail of elke andere vorm van chatcommunicatie. Een chatgeschiedenis is hierbij voldoende als bewijs van akkoord.',
            'Wanneer alle afspraken zijn gemaakt én Wegdermee op de locatie aanwezig is om de ophaling uit te voeren, wordt de overeenkomst als bindend beschouwd. Annulatie op dat moment is niet meer mogelijk.',
            'Annuleren kan uitsluitend tot 24 uur op voorhand, zoals bepaald in artikel 6.',
            'Voor offertes met een totaalbedrag hoger dan €1.000 (duizend euro) inclusief btw, is een voorschot van 20% verschuldigd. De werken worden pas definitief ingepland na ontvangst van dit voorschot op onze rekening. Bij niet-tijdige betaling van het voorschot behouden wij ons het recht voor de planning uit te stellen of de overeenkomst te annuleren.',
            'Zodra de klant akkoord heeft gegeven en Wegdermee de goederen heeft opgehaald, kan de klant geen aansprakelijkheid verhalen voor vermeende schade, vermeende diefstal, of het meenemen van goederen waarvan achteraf wordt beweerd dat ze niet mochten worden meegenomen.',
            'Goederen die worden aangeboden voor ophaling blijven volledig onder verantwoordelijkheid van de klant tot het moment dat ze het eigendom fysiek verlaten en door Wegdermee zijn meegenomen.',
            'Wegdermee behoudt zich het recht voor om goederen te weigeren, onder meer om redenen van veiligheid, wettelijke beperkingen, hygiëne of volume.',
            'De klant is verplicht de overeengekomen vergoeding direct te voldoen zodra de laatste goederen op de locatie zijn opgeladen. Betaling kan plaatsvinden via overschrijving, contant, mobiele betaalapp of QR-code. Na de betaling ontvangt de klant altijd een factuur ter bevestiging van de betaling.',
            'Bij niet-betaling of laattijdige betaling behouden wij ons het recht voor om, na ingebrekestelling, nalatigheidsintresten, administratieve kosten en/of incassokosten aan te rekenen overeenkomstig de toepasselijke Belgische wetgeving.',
          ]}
        />
      </LegalSection>

      <LegalSection title="6. Annuleren of verplaatsen">
        <LegalList
          items={[
            'Annulatie van een afspraak dient minstens 24 uur op voorhand te gebeuren.',
            'Bij laattijdige annulatie of indien wij ter plaatse komen zonder toegang tot het terrein, kan een verplaatsingskost worden aangerekend.',
            "In geval van slechte weersomstandigheden, veiligheidsrisico's of onvoorziene omstandigheden behouden wij ons het recht voor de planning te wijzigen of de dienst te verplaatsen.",
          ]}
        />
      </LegalSection>

      <LegalSection title="7. Onze aansprakelijkheid">
        <LegalList
          items={[
            'Wij voeren onze werkzaamheden zorgvuldig en volgens de geldende veiligheidsnormen uit.',
            'Onze aansprakelijkheid is beperkt tot de directe schade veroorzaakt door onze fout, en nooit hoger dan het bedrag van de betreffende factuur.',
            'Wij zijn niet aansprakelijk voor indirecte schade zoals winstderving, gevolgschade of verlies van gegevens.',
            'De klant is verantwoordelijk voor het vrijmaken van doorgangen, veilige toegang en het naleven van lokale regels inzake afvalverwerking.',
          ]}
        />
      </LegalSection>

      <LegalSection title="8. Website, merk en beelden">
        <p>
          Alle inhoud op {SITE_URL}, inclusief logo&apos;s, teksten, foto&apos;s en ontwerpen, zijn
          eigendom van wegdermee en mogen niet worden gebruikt zonder onze voorafgaande
          schriftelijke toestemming.
        </p>
        <p>
          De klant gaat akkoord dat Wegdermee voor, tijdens of na de uitvoering van de
          werkzaamheden foto&apos;s en korte video&apos;s van het verwijderde afval mag maken. Deze
          beelden kunnen worden gebruikt voor promotionele en marketingdoeleinden, zoals op de
          website, sociale media en advertenties. Wegdermee zal hierbij redelijke maatregelen
          treffen om de privacy van de klant te waarborgen, waaronder het vermijden van herkenbare
          personen, voertuigen, huisnummers en andere locatie-indicatoren.
        </p>
      </LegalSection>

      <LegalSection title="9. Persoonsgegevens">
        <p>
          Wij behandelen uw persoonsgegevens in overeenstemming met de Algemene Verordening
          Gegevensbescherming (AVG / GDPR).
        </p>
        <p>
          Onze{' '}
          <Link to="/privacy" className="text-ink underline hover:text-accent">
            privacyverklaring
          </Link>{' '}
          beschrijft hoe wij uw gegevens verzamelen, gebruiken en beschermen. Door gebruik te maken
          van onze Diensten stemt u in met dit beleid.
        </p>
      </LegalSection>

      <LegalSection title="10. Omstandigheden buiten onze controle">
        <p>
          Wij zijn niet aansprakelijk voor vertragingen of tekortkomingen veroorzaakt door
          omstandigheden buiten onze redelijke controle, zoals overmacht, stakingen, storingen of
          weersomstandigheden.
        </p>
      </LegalSection>

      <LegalSection title="11. Aanpassingen">
        <p>
          Wij behouden ons het recht voor om deze Voorwaarden op elk moment aan te passen. De meest
          recente versie wordt steeds gepubliceerd op {SITE_URL}/algemene-voorwaarden met een
          bijgewerkte &ldquo;Laatst bijgewerkt&rdquo;-datum.
        </p>
      </LegalSection>

      <LegalSection title="12. Vragen en klachten">
        <p>Voor vragen of klachten kunt u ons bereiken via:</p>
        <LegalList
          items={[
            `E-mail: ${business.email}`,
            `Telefoon: ${business.phoneDisplay}`,
            `Website: ${SITE_URL}`,
          ]}
        />
      </LegalSection>
    </LegalDocument>
  )
}
