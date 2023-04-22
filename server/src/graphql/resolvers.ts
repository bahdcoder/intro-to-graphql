import { GraphQLFieldResolver } from 'graphql'
import { generatePeople } from '../database/users'

export const suggestedFriends: GraphQLFieldResolver<
  Record<string, string>,
  Record<string, string>,
  { count: number }
> = (ctx, args) => {
  return generatePeople(args.count)
}
