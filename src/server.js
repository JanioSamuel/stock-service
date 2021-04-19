const express = require('express');
// const routes = require('./routes');
const cors = require('cors');
const app = express();
require('./workers/Consumer');

app.use(express.json());
app.use(cors());
// app.use(routes);

app.listen(process.env.PORT || 3004);