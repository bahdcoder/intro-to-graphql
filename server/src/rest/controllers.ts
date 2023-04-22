import { Request, Response } from 'express'
import { generatePeople } from '../database/users'

export const suggestedFriends = (request: Request, response: Response) => {
  const people = generatePeople()

  const content = request.query.content || 'suggestions' // for the suggestions page

  if (content === 'sidebar') {
    // suggestions sidebar
    return response.json(
      people.map(person => ({
        id: person.id,
        avatar: person.avatar,
        firstName: person.firstName,
        lastName: person.lastName,
        location: {
          country: person.location.country,
        },
      })),
    )
  }

  // suggestions topbar

  if (content === 'do-you-know') {
    return response.json([people[0]])
  }

  return response.json(people)
}
