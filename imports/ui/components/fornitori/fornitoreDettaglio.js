import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Accounts } from 'meteor/accounts-base';
import { Fornitori } from '/imports/api/fornitori/collection';
import template from './fornitoriLista.js';


const name = 'fornitoreDetttaglio';

class FornitoreDettaglio {
    constructor($scope, $reactive, $state) {
        'ngInject';

        //this.$state = $state;

        $reactive(this).attach($scope);
        this.subscribe('fornitori');
        this.error = '';
    }
    aggiungi() {
        Fornitori.insert(this);
        if(this.done) {
            this.done();
        }

    }
}
// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter
])
    .component(name, {
        template,
        controllerAs: name,
        controller: FornitoreDettaglio
    })
    .config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider.state('fornitori', {
        url: '/fornitori',
        template: '<fornitore-dettaglio></fornitore-dettaglio>'
    });
}