import { Mongo } from 'meteor/mongo';
export const Fornitori = new Mongo.Collection('fornitori');
Fornitori.allow({
    insert: function(){
        return true
    }
});