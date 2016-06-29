import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Accounts } from 'meteor/accounts-base';

import template from './fornitori.html';

class Fornitori {
    constructor($scope, $reactive, $state) {
        'ngInject';

        this.$state = $state;

        $reactive(this).attach($scope);
        this.subscribe('fornitori');
        this.credentials = {
            ragSociale: ''
        };

        this.error = '';
    }
    aggiungi() {
        Accounts.createUser(this.credentials,
            this.$bindToContext((err) => {
                if (err) {
                    this.error = err;
                } else {
                    this.$state.go('parties');
                }
             })
         );
    }
    elencoFornitori() {
        return fornitori.find();
    }
}

const name = 'fornitori';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter
])
    .component(name, {
        template,
        controllerAs: name,
        controller: Fornitori
    })
    .config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider.state('fornitori', {
        url: '/fornitori',
        template: '<fornitori></fornitori>'
    });
}