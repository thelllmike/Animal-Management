const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// eslint-disable-next-line no-undef
Animal = new Schema({
    aId: {
        type: String
    },
    aName: {
        type: String
    },
    aSpecies: {
        type: String
    },
    dob: {
        type: String
    }
    ,
    gender: {
        type: String
    }
    ,
    fTime: {
        type: String
    }
    ,
    zkeeper: {
        type: String
    },
    dateMedical: {
        type: String
    }
    ,
    timeTretement: {
        type: String
    }
    ,
    health: {
        type: String
    }
}, {
    collation: 'animal'
});

// eslint-disable-next-line no-undef
module.exports = mongoose.model('Animal',Animal);