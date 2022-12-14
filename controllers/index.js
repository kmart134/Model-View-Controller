const router = require('express').Router();
//from activity
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashBoard = require('./dashboardRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashBoard);

module.exports = router;