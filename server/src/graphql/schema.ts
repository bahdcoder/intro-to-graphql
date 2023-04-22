import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt } from 'graphql'

import { suggestedFriends } from './resolvers'

const StreetAddressType = new GraphQLObjectType({
  name: 'StreetAddress',
  fields: {
    address: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
  },
})

const SocialsType = new GraphQLObjectType({
  name: 'Socials',
  fields: {
    postsCount: {
      type: GraphQLString,
    },
    followersCount: {
      type: GraphQLString,
    },
    followingCount: {
      type: GraphQLString,
    },
  },
})

const LocationType = new GraphQLObjectType({
  name: 'Location',
  fields: {
    city: {
      type: GraphQLString,
    },
    country: {
      type: GraphQLString,
    },
    streetAddress: {
      type: StreetAddressType,
    },
    zipCode: {
      type: GraphQLString,
    },
    timeZone: {
      type: GraphQLString,
    },
  },
})

const WalletType = new GraphQLObjectType({
  name: 'Wallet',
  fields: {
    bitcoin: {
      type: GraphQLString,
    },
    litecoin: {
      type: GraphQLString,
    },
    ethereum: {
      type: GraphQLString,
    },
  },
})

const PersonType = new GraphQLObjectType({
  name: 'Person',
  fields: {
    id: {
      type: GraphQLString,
    },
    avatar: {
      type: GraphQLString,
    },
    bio: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    firstName: {
      type: GraphQLString,
    },
    lastName: {
      type: GraphQLString,
    },
    location: {
      type: LocationType,
    },
    wallets: {
      type: new GraphQLList(WalletType),
    },
    socials: {
      type: SocialsType,
    },
  },
})

/**
 * Construct a GraphQL schema and define the necessary resolvers.
 *
 * type Query {
 *   suggestedFriends: [PersonType]
 * }
 */
export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      suggestedFriends: {
        type: new GraphQLList(PersonType),
        resolve: suggestedFriends,
        args: {
          count: {
            type: GraphQLInt,
            defaultValue: 50,
          },
        },
      },
    },
  }),
})
