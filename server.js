// server.js

import app from './app.js';  // Ensure you import the correct app
import mongoose from 'mongoose';

const PORT = process.env.PORT || 5500;  // Default port is 5000

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
