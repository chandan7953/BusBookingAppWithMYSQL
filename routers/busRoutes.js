const express = require("express");
const router = express.Router();
const { addBus, getAvailableBuses } = require("../controllers/busController");

router.post("/buses", addBus);
router.get("/buses/available/:seats", getAvailableBuses);

module.exports = router;
