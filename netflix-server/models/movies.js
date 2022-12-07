const mongoosee = require('mongoose');
const Schema = mongoosee.Schema;
const movieSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
        imgTitle: {
            type: String,
            required: true,
        },
        imgSm: {
            type: String,
            required: true,
        },
        trailer: {
            type: String,
            required: true,
        },
        video: {
            type: String,
            required: true,
        },
        year: {
            type: String,
            required: true,
        },
        

        limit: {
            type: Number,
            required: true,
        },
        genre: {
            type: String,
            required: true,
        },
        isSeries: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);
module.exports = mongoosee.model('Movie', movieSchema);

