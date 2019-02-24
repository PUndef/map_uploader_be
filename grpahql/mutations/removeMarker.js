const {
    GraphQLObjectType,
    GraphQLString
} = require('graphql');
const markerGraphQLType = require('../types/markerType');
const Marker = require('../../models/marker');

module.exports = {
    type: markerGraphQLType,
    args: {
        id: {
            type: GraphQLString
        }
    },
    resolve(parent, args) {
        return Marker.findOneAndDelete(args.id).exec()
            .then(marker => marker.remove())
            .then(deletedMarker => deletedMarker)
            .catch(err => console.log(err))
    }
};