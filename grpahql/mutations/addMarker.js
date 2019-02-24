const {
    GraphQLInt,
    GraphQLString
} = require('graphql');
const markerGraphQLType = require('../types/markerType');
const Marker = require('../../models/marker');

module.exports = {
    type: markerGraphQLType,
    args: {
        address: {
            type: GraphQLString
        },
        city: {
            type: GraphQLString
        },
        street: {
            type: GraphQLString
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
    },
    resolve(parent, args) {
        const newMarker = new Marker({
            address: args.address,
            city: args.city,
            street: args.street,
            apartment: args.apartment,
            floors: args.floors,
            latitude: args.latitude,
            longitude: args.longitude,
            countApartments: args.countApartments,
        })

        return newMarker.save();
    }
};