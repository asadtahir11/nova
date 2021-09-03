const { validationResult } = require('express-validator');

const Cour = require('../models/cours');

exports.fetchAll = async (req, res, next) => {
  try {
    const [allCours] = await Cour.fetchAll();
    res.status(200).json(allCours);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.fetchOne = async (req, res, next) => {
  try {
    const [oneCour] = await Cour.fetchOne(req.params.id);
    res.status(200).json(oneCour)
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

