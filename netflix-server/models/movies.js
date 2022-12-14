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
            // required: true,
            default: '',
        },
        imgTitle: {
            type: String,
            // required: true,
            default: 'image',
        },
        imgSm: {
            type: String,
            // required: true,
            default: '',
        },
        trailer: {
            type: String,
            // required: true,
            default: '',
        },
        video: {
            type: String,
            // required: true,
        },
        year: {
            type: String,
            // required: true,
            default: '',
        },
        

        limit: {
            type: Number,
            // required: true,
            default: 0,
        },
        genre: {
            type: String,
            // required: true,
            default: '',
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

