const express = require("express");
const protect = require("../authVarification/varifiedToken");
const { getAllMovies, createMovie, getMovie, reandomMovie, updateMovie, deleteMovie } = require("../controllers/movieController");

const movieRouter = express.Router();

movieRouter.post("/add",protect,createMovie)
movieRouter.get("/find/:id",getMovie)
movieRouter.get("/getall",getAllMovies)
movieRouter.get("/random",reandomMovie)
movieRouter.put("/update/:id",protect,updateMovie)
movieRouter.delete("/delete/:id",protect,deleteMovie)


module.exports = movieRouter;