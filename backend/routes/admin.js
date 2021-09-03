const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const User = require('../models/user');

const adminController = require('../controllers/admin');


const auth = require('../middleware/auth');
const authorization = require('../middleware/authorization');

  
// Gerer les utilisateurs 

router.get('/users', auth , authorization,  adminController.fetchAllUsers);

router.get('/users/:id', auth, authorization, adminController.fetchOneUser);

router.delete('/users/:id', auth, authorization, adminController.deleteUser);

router.put('/users/:id', auth , authorization, adminController.updateUser );


// Gérer les cours 

 router.post(
    '/cours',
    [
      auth, authorization,
      body('title').trim().isLength({ min: 5 }).not().isEmpty(),
      body('body').trim().isLength({ min: 10 }).not().isEmpty(),
      body('user').trim().not().isEmpty(),
    ],
    adminController.postCour
);
  
router.delete('/cours/:id', auth, authorization, adminController.deleteCour);
  
  
router.put('/cours/:id', auth , authorization, adminController.updateOne );

module.exports = router;
