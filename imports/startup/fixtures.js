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
      'nome': 'Dubstep-Free Zone',
      'cognome': 'Fast just got faster with Nexus S.'
    }, {
      'nome': 'All dubstep all the time',
      'cognome': 'Get it on!'
    }, {
      'nome': 'Savage lounging',
      'cognome': 'Leisure suit required. And only fiercest manners.'
    }];

    fornitori.forEach((fornitore) => {
      Fornitori.insert(fornitore)
    });
  }
});
