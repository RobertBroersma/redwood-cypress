import { PrismaClient } from '@prisma/client'

const path = require('path')

export const db = new PrismaClient({
  datasources: {
    url: path.join(process.cwd(), '..', 'api', 'prisma', 'dev.db'),
  },
})

export default (on, config) => {
  on('task', {
    db: ({ operation, variables }) => {
      const [model, action] = operation.split('.')
      return db[model][action](variables)
    },
  })
}
