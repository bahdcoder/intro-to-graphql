import { GraphQLFieldResolver } from 'graphql'
import { generatePeople } from '../database/users'

export const suggestedFriends: GraphQLFieldResolver<
  Record<string, any>,
  Record<string, any>,
  { count: number }
> = (ctx, args) => {
  return generatePeople(args.count)
}
