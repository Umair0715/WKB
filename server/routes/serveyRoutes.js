const { addServeyData, getAllServeyData, getSingleMemberServeyData } = require('../controllers/serveyController');
const { protect, restrictTo } = require('../middlewares/protect');
const Member = require('../models/memberModel');
const router = require('express').Router();


router.route('/')
    .post(protect(Member) , restrictTo(2) , addServeyData)
    .get(getAllServeyData);

router.get('/:memberId' , getSingleMemberServeyData);

module.exports = router;