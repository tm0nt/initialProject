const express = require('express');
const router = express.Router();
const authController = require('../../controllers/authController');

router.get('/facebook/callback', authController.facebookCallback);
router.get('/google/callback', authController.googleCallback);

module.exports = router;
