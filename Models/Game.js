const mongoose = require('mongoose');

const PlayerSchmea = new mongoose.Schema({
    currentWordIndex : { // keeps track of what word user is on
        type: Number,
        default: 0
    },
    socketID: {type: String}, // has unique identifier 
    isPartyLeader: {type: Boolean, default: false},
    WPM: {type: Number, default: -1}, // its at -1 for developer convienience
    nickName: {type: String}
})

const GameSchema = new mongoose.Schema({
    words: [{type: string}],
    isOpen: {type: Boolean, default: true}, // if the party is open
    isOver: {type: Boolean, default: false}, // determine if game is over
    players: [PlayerSchema],
    startTime: {type: Number}

})