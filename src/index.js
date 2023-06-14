require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const route = require('./routes');
const cors = require('cors');

const db = require('./config/db');
db.connect();

const app = express();
const port = process.env.PORT || 8080;
const upload = multer();

app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    }),
);
app.use(upload.none());

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

route(app);

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});
