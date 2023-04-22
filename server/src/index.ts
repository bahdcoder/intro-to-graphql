// Using Promises without this module might cause memory leaks: https://github.com/mcollina/make-promises-safe
import 'make-promises-safe'

import Cors from 'cors'
import Express from 'express'
import { createHandler } from 'graphql-http/lib/use/express'
import ExpressGraphQlPlayground from 'graphql-playground-middleware-express'

import { schema } from './graphql/schema'
import { suggestedFriends } from './rest/controllers'

const app = Express()

app.use(Cors())
app.get('/suggested-friends', suggestedFriends)

app.get('/graphql', ExpressGraphQlPlayground({ endpoint: '/graphql' }))
app.post('/graphql', createHandler({ schema }))

app.listen({ port: process.env.PORT || 4000 })
