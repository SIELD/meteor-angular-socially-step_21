import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Accounts } from 'meteor/accounts-base';
import { Fornitori } from '/imports/api/fornitori/collection';



const name = 'fornitoriLista';
const template = `
<div>{{fornitoriLista}}</div>
    <div ng-repeat="fornitore in fornitoriLista.elencoFornitori">
        <span ng-repeat="(key, val) in fornitore">{{key}}:{{val}}</span>
    </div>
    <div class="page">
       <div class="title"><h3>Lista fornitori</h3></div>
        <div class="row">
            <form name="infoFornitori" layout="column" layout-fill layout-padding layout-margin>
                <div class ="input-group">
                    <span class="input-group-addon">Rag.Sociale</span>
                 <input class="form-control" type="text" placeholder="ragione sociale" aria-label="ragSociale" required/>
                </div>
                <div class="button">
                    <md-button class="md-raised md-primary" ng-click="fornitoriLista.aggiungi()" aria-label="login" ng-disabled="fornitoriLista.infoFornitori.$invalid()">Aggiungi</md-button>
                </div>
            </form>
       </div>
    </div>
`;

class FornitoriLista {
    constructor($scope, $reactive, $state) {
        'ngInject';

        //this.$state = $state;

        $reactive(this).attach($scope);
        this.subscribe('fornitori');

        this.helpers({
            elencoFornitori() {
                return Fornitori.find({});
            }
        })

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

}



// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter
])
    .component(name, {
        template,
        controllerAs: name,
        controller: FornitoriLista
    })
    .config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider.state('fornitori', {
        url: '/fornitori',
        template: '<fornitori-lista></fornitori-lista>'
    });
}