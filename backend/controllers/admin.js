const { validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/admin');
const Cour = require('../models/cours');


exports.fetchAllUsers = async (req, res, next) => {
  try {
    const [allUsers] = await User.fetchAllUsers();
    res.status(200).json(allUsers);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.fetchOneUser = async (req, res, next) => {
    try {
      const [oneUser] = await User.fetchOneUser(req.params.id);
      res.status(200).json(oneUser)
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

  exports.deleteUser = async (req, res, next) => {
    try {
      const deleteResponse = await User.delete(req.params.id);
      res.status(200).json(deleteResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };


  exports.updateUser = async (req, res, next) => {
  
    const name = req.body.name;
    const email = req.body.email;
  
    try {
      const user = {
        name: name,
        email: email 
      };
      const resultat = await User.update(req.params.id , user);
      res.status(201).json(resultat);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

  exports.updateOne = async (req, res, next) => {
  
    const title = req.body.title;
    const body = req.body.body;
    const id = req.body.id
  
    try {
      const cour = {
        title: title,
        body: body 
      };
      const resultat = await Cour.update(id , cour);
      res.status(201).json(resultat);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };
  
  exports.deleteCour = async (req, res, next) => {
    try {
      const deleteResponse = await Cour.delete(req.params.id);
      res.status(200).json(deleteResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };
  
  exports.postCour = async (req, res, next) => {
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) return;
  
    const title = req.body.title;
    const body = req.body.body;
    const user = req.body.user;
  
    try {
      const cour = {
        title: title,
        body: body,
        user: user,
      };
      const result = await Cour.save(cour);
      res.status(201).json({ message: 'Posted!' });
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

