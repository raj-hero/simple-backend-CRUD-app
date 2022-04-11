const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false,
            // useCreateIndex: true
            // mongoose.set('useNewUrlParser',true),
            // mongoose.set('useUnifiedTopology',true),
            // mongoose.set('useFindAndModify',false),
            // mongoose.set('useCreateIndex',true),

        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB  