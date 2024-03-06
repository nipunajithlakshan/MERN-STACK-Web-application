const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const driverSchema = new Schema({

    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    NIC: {
        type: String,
        require: true
    },
    vehinumber: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    }

})

const deliveryDrivers = mongoose.model("driver", driverSchema);

module.exports = deliveryDrivers;
