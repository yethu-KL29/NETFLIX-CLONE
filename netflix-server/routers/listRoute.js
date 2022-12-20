const express = require("express");
const protect = require("../authVarification/varifiedToken");
const { createList, deleteList, updateList, getList } = require("../controllers/listController");


const listRouter = express.Router();

listRouter.post("/add",createList)
listRouter.delete("/delete/:id",protect,deleteList)
listRouter.put("/update/:id",protect,updateList)
listRouter.get("/getlist",getList)

module.exports = listRouter;