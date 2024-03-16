const mongoose = require('mongoose')

const carSchema = mongoose.Schema(
{
    marque: {
        type:String,
        required: [true, "enter la marque"]
    },
    kilomet : {
        type: Number,
        required: true,
        default: 0
    },
    annee : {
        type: Number,
        required: true,
        default: 0
    }

}
)
const car = mongoose.model('car',carSchema )

module.exports = car
 