const router = require('express').Router();
const { protect , restrictTo } = require('../middlewares/protect');
const Admin = require('../models/adminModel');
const {
    create , updateOne , deleteOne , getAll , getOne
} = require('../controllers/PP_Controller');

router.route('/')
    .post(protect(Admin) , restrictTo(0) , create )
    .get(protect(Admin) , restrictTo(0) , getAll )

router.route('/:id')
    .get(protect(Admin) , restrictTo(0) , getOne )
    .put(protect(Admin) , restrictTo(0) , updateOne )
    .delete(protect(Admin) , restrictTo(0) , deleteOne )
    

module.exports = router;