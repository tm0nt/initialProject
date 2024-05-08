const express = require('express');
const router = express.Router();
const authController = require('../../controllers/authController');

router.get('/auth/facebook/callback', authController.facebookCallback);
router.get('/auth/google/callback', authController.googleCallback);

module.exports = router;
