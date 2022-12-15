const User = require('../models/user');
const jwt = require("jsonwebtoken")
const Movie = require('../models/movies');

const createMovie = async (req, res, next) => {
    // if(req.user.isAdmin){
        const { title, desc, img } = req.body;
        let movie;
        try {
             movie = new Movie({
            title,
            desc,
            img
            
            });
            await movie.save();
            res.status(201).json({ movie });
        } catch (error) {
            console.log(error);
        }
//   }else{
//     res.status(401).json({message:"you are not allowed to create movie"})

//     }

};

const deleteMovie = async (req, res, next) => {
    if(req.user.isAdmin){
        const  id  = req.params.id;
        try {
            const movie = await
            Movie.findByIdAndDelete(id);
            res.status(200).json({ message: "Movie has been deleted" });
        } catch (error) {
            console.log(error);
        }
    }else{
        res.status(401).json({message:"you are not allowed to delete movie"})
    }
};

const updateMovie = async (req, res, next) => {
    // if(req.user.isAdmin){
        const id = req.params.id;
        try {
            const movie = await Movie.findByIdAndUpdate(id, {
           $set:req.body
            }, { new: true });
            await movie.save();
            res.status(200).json({ movie });
        } catch (error) {
            console.log(error);
        }
    // }else{
    //     res.status(401).json({message:"you are not allowed to update movie"})
    // }
}

const getMovie = async (req, res, next) => {
    const id = req.params.id;
    try {
        const movie = await Movie.findById
        (id);
        res.status(200).json({ movie });
    } catch (error) {
        console.log(error);
    }
};


const getAllMovies = async (req, res, next) => {
    try {
        const movies = await Movie.find();
        res.status(200).json({ movies });
    } catch (error) {
        console.log(error);
    }
}
const reandomMovie = async (req, res, next) => {
    try {
        type = req.query.type;
        let movie;
        if (type === "series") {
            movie = await Movie.aggregate([
                { $match: { isSeries: true } },
                { $sample: { size: 1 } }
            ]);

        }
        else {
            movie = await Movie.aggregate([
                { $match: { isSeries: false } },
                { $sample: { size: 1 } }
            ]);
        }
        res.status(200).json({ movie });

        
    } catch (error) {
        console.log(error);
    }
}


exports.createMovie = createMovie;
exports.deleteMovie = deleteMovie;
exports.updateMovie = updateMovie;
exports.getMovie = getMovie;
exports.getAllMovies = getAllMovies;
exports.reandomMovie = reandomMovie;


