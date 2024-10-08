// app.js

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { dbConnection } from './database/dbConnections.js';
import { errorMiddleware } from './error/error.js';  
import reservationRouter from './routes/reservationRoute.js';

const app = express();
dotenv.config({ path: './Config/config.env' });  // Corrected path

// Middleware
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v1/reservation', reservationRouter);

// Database Connection
dbConnection();

// Error Handling Middleware
app.use(errorMiddleware);

export default app;
