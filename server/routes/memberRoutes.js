const router = require('express').Router();
const { login, update, getProfile } = require('../controllers/memberController');
const { restrictTo , protect } = require('../middlewares/protect');
const Member = require('../models/memberModel');

router.post('/login' , login);
router.put('/update' , protect(Member) , restrictTo(2) , update);
router.get('/profile' , protect(Member) , restrictTo(2) , getProfile);

module.exports = router;