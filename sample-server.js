const express = require('express');
const app = express();
const path = require('path')

app.use('/static', express.static(path.join(__dirname, 'public')));

const router = require('./scripts/routerUniversities.js')
router.handleAll(app)
router.handleById(app)

let port = 8080;
app.listen(port, () => {
    console.log("Server running at port: " + port)
});