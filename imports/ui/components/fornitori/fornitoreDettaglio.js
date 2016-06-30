import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Meteor } from 'meteor/meteor';

import { Fornitori } from '/imports/api/fornitori/collection';

const name = 'fornitoreDettaglio';
const template = `

 <md-input-container>
        <label>Ragione sociale</label>
        <input ng-model="fornitoreDettaglio.fornitore.ragSociale">
      </md-input-container>
`;
class FornitoreDettaglio {
    constructor($stateParams, $scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);

        this.fornitoreID = $stateParams.fornitoreID;
        this.subscribe('fornitori');
        this.helpers({
            fornitore() {
                return Fornitori.findOne({
                    _id: $stateParams.fornitoreID
                });
            }
        })
    }

    canInvite() {
        if (!this.fornitore) {
            return false;
        }
    }

    save() {
        Fornitori.update({
            _id: this.fornitore._id
        }, {
            $set: {
                name: this.fornitore.name,
                description: this.fornitore.description,
                public: this.fornitore.public,
                location: this.fornitore.location
            }
        }, (error) => {
            if (error) {
                console.log('Oops, unable to update the party...');
            } else {
                console.log('Done!');
            }
        });
    }
}

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter,
]).component(name, {
    template,
    controllerAs: name,
    controller: FornitoreDettaglio
})
    .config(config);

function config($stateProvider) {
    'ngInject';

    $stateProvider.state(name, {
        url: '/fornitori/:fornitoreId',
        template: '<fornitore-dettaglio></fornitore-dettaglio>'
    });
}
