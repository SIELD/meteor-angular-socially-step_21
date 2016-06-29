if (Meteor.isServer) {
    Meteor.publish('fornitori', function() {
        return Fornitori.find({});
    });
}