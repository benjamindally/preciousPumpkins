const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Update.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body);
    db.Update.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  deleteUpdate: function(req, res) {
    db.Update.deleteOne({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  newBodyText: function(req, res) {
    console.log(req.body.bodyText);
    db.Update.findOneAndUpdate(
      { _id: req.params.id },
      { bodyText: [req.body.bodyText] }
    )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  toggleSticky: function(req, res) {
    db.Update.findOneAndUpdate({ _id: req.params.id }, { sticky: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  removeSticky: function(req, res) {
    db.Update.findOneAndUpdate({ _id: req.params.id }, { sticky: false })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
