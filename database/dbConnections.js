// database/dbConnections.js
import mongoose from 'mongoose';

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: 'RESTAURANT',
    })
    .then(() => {
        console.log('Connected to the database successfully!');
    })
    .catch(err => {
        console.log(`Database connection error: ${err}`);
    });
};
