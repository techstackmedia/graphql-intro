import express from 'express';
const app = express();
const morgan = require('morgan');
import { graphqlHTTP } from 'express-graphql';
import { typeDefs } from './schema';
app.use(morgan('dev'));



const Person = [
    {
        id: 2,
        name: 'Mich',
        age: 23,
        isOld: true,
        friends: [{ id: 2, age: 34, name: 'Musa' }]
    },
    {
        id: 5,
        name: 'Ownen',
        age: 21,
        friends: [{ id: 5, age: 56, name: 'Jon' }]
    }
]

const resolvers = {
    getFriend({ id }: { id: number }) {
        return Person.find((person) => person.id === Number(id))
    },
    getFriends() {
        return Person
    }
}

app.use('/graphql', graphqlHTTP({
    schema: typeDefs,
    rootValue: resolvers,
    graphiql: true
}))

module.exports = app