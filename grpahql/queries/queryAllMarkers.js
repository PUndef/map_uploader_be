const {
    GraphQLList
} = require('graphql');
const orderGraphQLType = require('../types/markerType');
const Marker = require('../../models/marker');

module.exports = {
    type: new GraphQLList(orderGraphQLType),
    args: {},
    resolve() {
        return Marker.find({})
    }
}