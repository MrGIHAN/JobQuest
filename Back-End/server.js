const express = require('express');
const mongoose = require('mongoose');

const app = express();

const URI = 'mongodb+srv://admin:@cluster0.ogorx9a.mongodb.net/?retryWrites=true&w=majority';

const PORT = 3080;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
}).then(() => {
    console.log("Database connection is successful!");
}).catch((err) => {
    console.error("Database connection failed:", err);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
