const express = require("express");
const protect = require("../authVarification/varifiedToken");
const { createList, deleteList } = require("../controllers/listController");


const listRouter = express.Router();

listRouter.post("/add",protect,createList)
listRouter.post("/delete/:id",protect,deleteList)
listRouter.put("/update/:id",protect,listUp)

module.exports = listRouter;