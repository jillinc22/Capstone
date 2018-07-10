var express = require('express');
var router = express.Router();
var authMiddleware = require('../../auth/middlewares/auth');
var db = require('../../../lib/database')();

router.get('/',(req, res) => {
    console.log('=================================');
    console.log('BARANGAY: RELEASING');
    console.log('=================================');

    res.render('barangay/releasing/views/releasing');

});

module.exports = router;