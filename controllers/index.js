const router = require('express').Router();

const otherRoutes = require('./routes');

router.use('/', homeRoutes);

module.exports = router;