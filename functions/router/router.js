const express = require("express");
const router = express.Router();

//routing to student page
router.use("/student",require("../api/student"))





module.exports = router;