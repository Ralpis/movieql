import { getMovies, getById} from "./db"


const reslovers = {
    Query: {
        movies: () => getMovies,
        movie: (_, { id }) => getById(id)
    }
};

export default reslovers;