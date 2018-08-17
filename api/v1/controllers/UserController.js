const models = require('../db/models');
const poeples = models.poeples;

module.exports = {
  getPoeples: (req, res) => {
    poeples.findAll({
      attributes: ['id', 'name', 'age', 'company']
    })
    .then(data => {
      res.status(200).json({
        data
      })
    })
    .catch(error => {
      res.status(500).json({
        message: error.message
      })
    })
  }
}
