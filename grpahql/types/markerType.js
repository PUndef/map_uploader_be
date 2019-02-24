const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
} = graphql;

const MarkerType = new GraphQLObjectType({
    name: 'Marker',
    fields: () => ({
        id: {
            type: GraphQLString
        },
        address: {
            type: GraphQLString,
        },
        city: {
            type: GraphQLString,
        },
        street: {
            type: GraphQLString,
        },
        apartment: {
            type: GraphQLString,
        },
        floors: {
            type: GraphQLInt,
        },
        latitude: {
            type: GraphQLString,
        },
        longitude: {
            type: GraphQLString,
        },
        countApartments: {
            type: GraphQLInt,
        },
    })
});

module.exports = MarkerType;