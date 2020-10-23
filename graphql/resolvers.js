import { people, getById} from "./db"


const reslovers = {
    Query: {
        people: () => people,
        person: (_, { id }) => getById(id)
    }
};

export default reslovers;