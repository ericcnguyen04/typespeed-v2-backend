// imports
const express = require('express');
const app = express();
const socketio = require('socket.io')
const mongoose = require('mongoose')

const expressServer = app.listen(3001);
const io = socketio(expressServer);

// requiring schema
const Game = require('./Models/Game');
const QuotableAPI = require('/QuotableAPI');

mongoose.connect('mongodb://localhost:27017/typeracer-backend') 
                .then(() => {
                    console.log('sucessfully connected')
                })
                .catch((error) => {
                    console.error('error connecting to database:', error)
                })