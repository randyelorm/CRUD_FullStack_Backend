const mongoose = require("mongoose")


const CrudSchema = new mongoose.Schema({
    item: {
        type: String,



    },

    cost: {
        type: Number
    }
}, { timestamps: true })

const CostTrackerModel = mongoose.model("CostTrackerModel", CrudSchema)

module.exports = CostTrackerModel