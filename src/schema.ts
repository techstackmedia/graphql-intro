import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Person {
         id: ID
         name: String
         age: Int
         isOld: Boolean
         diet: String
         friends: [Friend]
    }

    type Friend {
        age: Int
        name: String
    }

    type Query {  
        getFriend(id: Int): Person
        getFriends(id: Int, name: String): [Person]
    }
`);

export { schema }