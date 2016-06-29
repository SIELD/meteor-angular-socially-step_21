import {Fornitori} from './collection';
if (Meteor.isServer) {
    Meteor.publish('fornitori', function() {
        return Fornitori.find({});
    });
}