const mongoose = require('mongoose');

let blockSchema = mongoose.Schema({
    studentName: {
        type: String,
        required: true
    },

    blockName: {
        type: String,
        required: true
    },
    roomNumber: {
        type: Number,
        required: true
    },
    availableRooms: {
        type: Number,
        Default: 10
    },
    regNo: {
        type: String
    }
});

let FemaleHostelSchema = mongoose.Schema({
    hostel: [blockSchema]
});

let FemaleHostel = module.exports = mongoose.model('FemaleHostel', FemaleHostelSchema);
