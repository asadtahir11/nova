const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const User = require('../models/user');

const adminController = require('../controllers/admin');

const auth = require('../middleware/auth');


router.get('/users', auth , adminController.fetchAllUsers);

router.get('/users/:id', auth, adminController.fetchOneUser);

router.delete('/users/:id', auth, adminController.deleteUser);

router.put('/users/:id', auth , adminController.updateUser );

module.exports = router;
