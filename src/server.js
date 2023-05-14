const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }))
const port = process.env.PORT || 300;
const Router = require('./Router');

app.use(Router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});