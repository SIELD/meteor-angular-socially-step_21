import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Accounts } from 'meteor/accounts-base';
import { Fornitori } from '/imports/api/fornitori/collection';

const name = 'fornitoriLista';
const template = `

    <div class="page md-padding">
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
        
        <div class="row">
            <div ng-repeat="fornitore in fornitoriLista.elencoFornitori">
                <span class="md-body-2" ui-sref="fornitoreDettaglio({ fornitoreId: fornitore._id })">
                    {{fornitore.ragSociale}} 
                </span> 
            </div>
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
        console.log(this)
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