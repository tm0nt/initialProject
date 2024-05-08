// routes/auth/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../../controllers/authController');

router.get('/facebook', authController.authenticateFacebook);
router.get('/google', authController.authenticateGoogle);

module.exports = router;
