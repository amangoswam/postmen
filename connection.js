const mongoose = require("mongoose")
const connectToDB= async () =>mongoose.connect('mongodb+srv://amangoswami19ty33:rajkumar@cluster0.os0y0.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-137e32-shard-0&w=majority&readPreference=primary')

module.exports = connectToDB