const mongoose = require('mongoose');
const BASE_URL = process.env.PRODUCTION_BASE_URL ;


mongoose.connect(BASE_URL)
.then(response => {
    console.log("DATABASE CONNECTION SUCCESSFUL");
})
.catch(err => {
    console.log("DATABASE CONNECTION FAILED");
})