const {
    GraphQLInt,
    GraphQLString
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
        return Marker.findById(args.id)
            .then(gadget => {
                gadget.address = args.address;
                gadget.city = args.city;
                gadget.street = args.street;
                gadget.apartment = args.apartment;
                gadget.floors = args.floors;
                gadget.latitude = args.latitude;
                gadget.longitude = args.longitude;
                gadget.countApartments = args.countApartments;
                return marker.save();
            })
            .then(updatedMarker => updatedMarker)
            .catch(err => console.log(err))
    }
};