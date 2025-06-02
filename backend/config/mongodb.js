import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected',() => {
        console.log("DB Connected");
    })

    await mongoose.connect(`mongodb+srv://manansheta2021:manan123@cluster0.e88pfm2.mongodb.net`)

}

export default connectDB;