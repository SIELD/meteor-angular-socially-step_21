import { Meteor } from 'meteor/meteor';
import { Parties } from '../api/parties';
import { Fornitori } from '../api/fornitori';

Meteor.startup(() => {
  if (Parties.find().count() === 0) {
    const parties = [{
      'name': 'Dubstep-Free Zone',
      'description': 'Fast just got faster with Nexus S.'
    }, {
      'name': 'All dubstep all the time',
      'description': 'Get it on!'
    }, {
      'name': 'Savage lounging',
      'description': 'Leisure suit required. And only fiercest manners.'
    }];

    parties.forEach((party) => {
      Parties.insert(party)
    });
  }

  if (Fornitori.find().count() === 0) {
    const fornitori = [{
      'nome': 'Alfa',
      'ragSociale': 'Alfa SPA',
      'indirizzo': 'Via Roma 8',
      'citta': 'Milano'
    }, {
      'nome': 'BES',
      'ragSociale': 'Alfa s.r.l.',
      'indirizzo': 'Via Napoli 20',
      'citta': 'Milano'
    }, {
      'nome': 'La Cartissima',
      'ragSociale': 'La Cartissima s.a.s.',
      'indirizzo': 'Via Torino 60',
      'citta': 'Bologna'
    }];

    fornitori.forEach((fornitore) => {
      Fornitori.insert(fornitore)
    });
  }
});
