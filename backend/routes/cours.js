const express = require('express');

const { body } = require('express-validator');

const coursController = require('../controllers/cours');

const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, coursController.fetchAll);


router.get('/:id', auth, coursController.fetchOne);


module.exports = router;
