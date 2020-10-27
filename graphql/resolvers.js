import { getMovies, getById, addMovie, deleteMovie} from "./db"


const reslovers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, { id }) => getById(id)
    },
    Mutation: {
        addMovie:(_, {name, score})=> addMovie(name,score),
        deleteMovie: (_, { id }) =>deleteMovie(id)
    }
};

export default reslovers;