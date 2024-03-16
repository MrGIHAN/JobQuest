const express = require('express');
const mongoose = require('mongoose');

const app = express();

const URI = 'mongodb+srv://jobapp:jobapp@cluster0.awhxm2z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const PORT = process.env.PORT || 3000;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log("Database connection is successful!");
}).catch((err) => {
    console.log("Database connection is unsuccessful", err);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
