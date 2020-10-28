import { getMovies, } from "./db"


const reslovers = {
    Query: {
        movies: (_,{rating,limit}) => getMovies(limit, rating)
     }
};

export default reslovers; 