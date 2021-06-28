const express = require("express");
const router = express.Router();
const requestController = require("../controllers/requestController");

router.get('/getTest', requestController.getRequest);
router.post('/postTest', requestController.postRequest);

module.exports = router;