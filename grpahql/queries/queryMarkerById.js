const {
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
        return Marker.findById(args.id)
    }
}