const express = require("express");
const { createGrievance, getGrievances} = require("../controllers/grievanceController");

const router = express.Router();

router.post("/create", createGrievance);
router.get("/", getGrievances);


module.exports = router;
