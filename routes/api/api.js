let express = require('express');
let router = express.Router();
let apiCtrl = require('./../../controllers/api/apiController');

router.get('/topscores', apiCtrl.index);
router.post('/topscores', apiCtrl.create);

module.exports = router;