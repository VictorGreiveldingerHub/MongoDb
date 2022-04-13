import mongoose from 'mongoose';
import config from 'config';

async function connect() {
    try {
        await mongoose.connect("mongodb://localhost:27017/restaurants");
        console.log("Connection à la BDD ok");
    } catch (error) {
        console.log(error);
    }
}

export default connect;