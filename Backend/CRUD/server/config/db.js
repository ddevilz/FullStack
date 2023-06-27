const mongoose = require('mongoose');
require('dotenv').config()

const connectToDb = async () => {
    mongoose.connect(process.env.MONGO_DB)
        .then((con) => (
        console.log(`Connecte DB: ${con.connection.host}`)
        ))
        .catch((err) =>  {
            console.log(err.message);
            process.exit(1);
        })     
}

module.exports = connectToDb;