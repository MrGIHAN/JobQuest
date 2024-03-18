const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRouter = require('./routes/authRoute');
const app = express();

const URI = 'mongodb+srv://admin:admin@cluster0.ogorx9a.mongodb.net/?retryWrites=true&w=majority';

const PORT = 3080;


app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Database connection is successful!");
}).catch((err) => {
    console.error("Database connection failed:", err);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.use((err, res, req, next) => {
    err.statuCode = err.statuCode || 500;
    err.status = err.status || 'error';

    res.status(err.statuCode).json({
        status: err.status,
        message: err.message,
    });
})