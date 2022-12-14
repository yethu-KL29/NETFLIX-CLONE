const List = require('../models/List');

const createList = async (req, res, next) => {
    const { title, type,genre,content } = req.body;
    let list;
    try {
        list = new List({
            title,
            type,
            genre,
            content
        });
        await list.save();
        res.status(201).json({ list });
    } catch (error) {
        console.log(error);
    }
}

const deleteList = async (req, res, next) => {
    const  id  = req.params.id;
    try {
        const list = await
        List.findByIdAndDelete(id);
        res.status(200).json({ message: "List has been deleted" });
    } catch (error) {
        console.log(error);

    }
};
// const updateList = async (req, res, next) => {
//     const  id  = req.params.id;
//     let list
//     try {
//         const list = await
//         List.findByIdAndDelete(id);
//         res.status(200).json({ message: "List has been deleted" });
//     } catch (error) {
//         console.log(error);

//     }
// };


module.exports = {
    createList,
    deleteList,
}


