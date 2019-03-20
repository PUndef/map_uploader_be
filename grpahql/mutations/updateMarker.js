const {
    GraphQLString,
} = require('graphql');
const markerGraphQLType = require('../types/markerType');
const Marker = require('./../../models/marker');

module.exports = {
    type: markerGraphQLType,
    args: {
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
            type: GraphQLString,
        },
        latitude: {
            type: GraphQLString,
        },
        longitude: {
            type: GraphQLString,
        },
        countApartments: {
            type: GraphQLString,
        },
    },
    resolve(parent, args) {
        return Marker.findById(args.id)
            .then(marker => {
                marker.address = args.address;
                marker.city = args.city;
                marker.street = args.street;
                marker.apartment = args.apartment;
                marker.floors = args.floors;
                marker.latitude = args.latitude;
                marker.longitude = args.longitude;
                marker.countApartments = args.countApartments;
                return marker.save();
            })
            .then(updatedMarker => updatedMarker)
            .catch(err => console.log(err))
    }
};