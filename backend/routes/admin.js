const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const User = require('../models/user');

const adminController = require('../controllers/admin');


const auth = require('../middleware/auth');

  
// Gerer les utilisateurs 

router.get('/users', auth , adminController.fetchAllUsers);

router.get('/users/:id', auth, adminController.fetchOneUser);

router.delete('/users/:id', auth, adminController.deleteUser);

router.put('/users/:id', auth , adminController.updateUser );


// Gérer les cours 

router.post(
    '/cours',
    [
      auth,
      body('title').trim().isLength({ min: 5 }).not().isEmpty(),
      body('body').trim().isLength({ min: 10 }).not().isEmpty(),
      body('user').trim().not().isEmpty(),
    ],
    adminController.postCour
  );
  
  router.delete('/cours/:id', auth, adminController.deleteCour);
  
  
  router.put('/cours/:id', auth , adminController.updateOne );

module.exports = router;
