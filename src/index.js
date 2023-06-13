const express = require('express');
const app = express();
const morgan = require('morgan');
const route = require('./routes');

const port = 8000;



app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});
