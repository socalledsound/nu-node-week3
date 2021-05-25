// {
//     "name": "Mongo Fly Shop",
//     "image": "images/mongo-logo.png",
//     "featured": false,
//     "description": "Need a new fishing pole, a tacklebox, or flies of all kinds? Stop by Mongo Fly Shop."
// }

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partnerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    featured: {
        type: Boolean,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    },
    {
        timestamps: true,
    }
)

const Partner = mongoose.model('Partner', partnerSchema)

module.exports = Partner