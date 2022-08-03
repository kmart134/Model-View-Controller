const router = require('express').Router();
//from activity
const otherRoutes = require('./routes');

router.use('/', homeRoutes);

module.exports = router;