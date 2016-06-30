import { Meteor } from 'meteor/meteor';
import { Parties } from '../api/parties';
import { Fornitori } from '../api/fornitori/collection';

Meteor.startup(() => {
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