const express = require("express");
const router = express.Router();
const {OrderController} = require('../controller/order')

router.get("/get-urgent",OrderController.getUrgent)
router.get("/get-booking",OrderController.getBooking)
router.post("/writecleaner/:id",OrderController.getCleaner)
router.get("/approved-area/:order_id",OrderController.approvedArea)
router.get("/order-ongoing/:order_id",OrderController.orderOngoing)
router.get("/history/:id",OrderController.getHistory)


module.exports = router;