const { buildSchema } = require('graphql');

let users = require('./model');

const schema = buildSchema(`
  type Person {
    id: Int!
    name: String
    height: Int
  },
  type Query {
    people: [Person]!
  }
`);

const root = {
  people() {
    return users;
  }
}

people {
  id
  name
  height
}
