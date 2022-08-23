const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let isConnected;

module.exports = connectToDatabase =() => {
    if(isConnected){
        return Promise.resolve();
    }

    return mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
        .then(db => {
            isConnected=db.connection[0].readyState;
        });
};