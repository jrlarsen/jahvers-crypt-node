var express = require('express');
var app = express();
var path = require('path');
var apiRouter = require('./api');

app.use(express.static(path.resolve(__dirname, "public")));
app.use('/api', apiRouter);

app.listen(process.env.PORT || 1337);