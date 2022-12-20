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
            default:"https://m.media-amazon.com/images/M/MV5BNzU4NWEwNDItMzMzYy00ZDYyLWIxZjMtMDlkYWVjNjQwYzBjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
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

