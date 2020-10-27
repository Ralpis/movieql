import { getMovies, getById, addMovie} from "./db"


const reslovers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, { id }) => getById(id)
    },
    Mutation: {
        addMovie:(_, {name, score})=> addMovie(name,score)
    }
};

export default reslovers;