 const router = require('express').Router();

 router.use(require('./income'));
 router.use(require('./user'));
 
 module.exports = router;
