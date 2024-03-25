const express = require("express")
const router = express.Router()
const controller = require("../MyAppController/controller")

router.get('/get-request',controller.getMyReq)
router.post('/post-request',controller.postMyReq)

module.exports = router