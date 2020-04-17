const mongoosse = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoosse.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected.....")
    } catch (err) {
        console.log(`Error: ${err.message}`)
        process.exit(1);
    }

}

module.exports = connectDB