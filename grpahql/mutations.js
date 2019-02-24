const {
    GraphQLObjectType,
    GraphQLString
} = require('graphql');

const addMarker = require('./mutations/addMarker');
const updateMarker = require('./mutations/updateMarker');
const removeMarker = require('./mutations/removeMarker');

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addMarker,
        updateMarker,
        removeMarker,
    }
})

module.exports = Mutation;