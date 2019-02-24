const {
    GraphQLObjectType
} = require('graphql');

const queryAllMarkers = require('./queryAllMarkers')
const queryMarkerById = require('./queryMarkerById');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        queryAllMarkers,
        queryMarkerById,
    }
})

module.exports = RootQuery;