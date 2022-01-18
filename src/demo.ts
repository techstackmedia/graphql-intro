import express from 'express';
const app = express();
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema';
const port = 4000

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
    schema,
    rootValue: resolvers,
    graphiql: true
}))

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})