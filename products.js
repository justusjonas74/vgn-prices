const PREFIX = 'PT_2015_Ticket_'

const PRODUCTS_TYPES = [{
    type: 'EF',
    url: 'https://www.vgn.de/tickets/einzelfahrkarte/',
    products: [
        ['Einzelfahrkarte HandyTicket', PREFIX + 'EFH'],
        ['Einzelfahrkarte HandyTicket ermäßigt', PREFIX + 'EFH-K'],
        ['Einzelfahrkarte', PREFIX + 'EF'],
        ['Einzelfahrkarte ermäßigt', PREFIX + 'EF-K']
    ]
}, {
    type: '4er-Ticket',
    url: 'https://www.vgn.de/tickets/4er-ticket/',
    products: [
        ['4er-Ticket',  PREFIX + 'SK4'],
        ['4er-Ticket ermäßigt', PREFIX + 'SK4-K']
    ]
}, {
    type: 'Tagestickets',
    url: 'https://www.vgn.de/tickets/tagesticket-solo/',
    products: [
        ['TagesTicket Solo',  PREFIX + 'TTS'],
        ['TagesTicket Plus', PREFIX + 'TTP']
    ]
}, {
    type: '7-tage-mobicard',
    url: 'https://www.vgn.de/tickets/7-tage-mobicard',
    products: [
        ['7-Tage-MobiCard',  PREFIX + 'MC7']
    ]
}, {
    type: 'Monatsmarken',
    url: 'https://www.vgn.de/tickets/31-tage-mobicard/',
    products: [
        ['31-Tage-MobiCard',  PREFIX + 'MC31'],
        ['9-Uhr-MobiCard',  PREFIX + 'MC9'],
        ['Solo 31',  PREFIX + 'MCS31']
    ]
}, {
    type: 'Abo3+6',
    url: 'https://www.vgn.de/tickets/abo3/',
    products: [
        ['Abo 3',  PREFIX + 'ABO3'],
        ['Abo 6',  PREFIX + 'ABO6']
    ]
}, {
    type: 'JahresAbos',
    url: 'https://www.vgn.de/tickets/jahresabo',
    products: [
        ['Abo 3',  PREFIX + 'UJA'],
        ['Abo 6',  PREFIX + 'Jap']
    ]
}, {
    type: '9-Uhr-JahresAbo',
    url: 'https://www.vgn.de/tickets/9-uhr-jahresabo/',
    products: [
        ['9-Uhr-JahresAbo',  PREFIX + 'UJAAZ']
    ]
}, {
    type: 'Ausbildungsmarken',
    url: 'https://www.vgn.de/tickets/wochenwertmarke-ausbildung/',
    products: [
        ['Wochenwertmarke Ausbildung',  PREFIX + 'AUS7'],
        ['Monatswertmarke Ausbildung',  PREFIX + 'AUS']
    ]
}]

// DONE:
// https://www.vgn.de/tickets/einzelfahrkarte/
// https://www.vgn.de/tickets/4er-ticket/
// https://www.vgn.de/tickets/tagesticket-solo/
// https://www.vgn.de/tickets/7-tage-mobicard
// https://www.vgn.de/tickets/31-tage-mobicard/
// https://www.vgn.de/tickets/abo3/
// https://www.vgn.de/tickets/jahresabo
// https://www.vgn.de/tickets/9-uhr-jahresabo/
// https://www.vgn.de/tickets/wochenwertmarke-ausbildung/

// TODO:
// ADD: https://www.vgn.de/tickets/studenten/
// ADD: https://www.vgn.de/tickets/10er-streifenkarte/
// ADD: https://www.vgn.de/tickets/ferienticket/
// ADD: https://www.vgn.de/tickets/firmenabo/
// ADD: https://www.vgn.de/tickets/anschlussfahrausweis/
// ADD: https://www.vgn.de/tickets/flugticket/
// ADD: https://www.vgn.de/tickets/bayern-ticket/
// ADD: https://www.vgn.de/tickets/schoenes-wochenende-ticket/
// ADD: https://www.vgn.de/tickets/city-ticket/
// ADD: https://www.vgn.de/tickets/fahrrad-tageskarte-bayern/
// ADD: https://www.vgn.de/tickets/db-zuschlag/
// ADD: https://www.vgn.de/tickets/bamberger-sonderkarten/
// ADD: https://www.vgn.de/tickets/kaerwa-tickets/
// ADD: https://www.vgn.de/tickets/ermaessigte-monatskarte/
// ADD: https://www.vgn.de/tickets/gruppenfahrkarte/
// ADD: https://www.vgn.de/tickets/hotelfahrkarte/
// ADD: https://www.vgn.de/tickets/kombiticket/
// ADD: https://www.vgn.de/tickets/autohaus-ticket/

module.exports = PRODUCTS_TYPES
