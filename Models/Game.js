const mongoose = require('mongoose');

const PlayerSchmea = new mongoose.Schema({
    currentWordIndex : { // keeps track of what word user is on
        type: Number,
        default: 0
    },
    socketID: {type: String}, // has unique identifier 
    isPartyLeader: {type: Boolean, default: false},
    WPM: {type: Number, default: -1}
})