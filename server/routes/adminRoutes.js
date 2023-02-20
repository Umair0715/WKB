const router = require('express').Router();
const { 
    register , login , updateProfile , getProfile , getAllBlockIncharges, getOneBlockIncharge , createBlockIncharge , updateBlockIncharge , deleteBlockIncharge , getBlockInchargeTeamMembers
} = require('../controllers/adminController');
const { protect, restrictTo } = require('../middlewares/protect');
const Admin = require('../models/adminModel');

router.post('/register' , register);
router.post('/login' , login);
router.put('/update' , protect(Admin) , restrictTo(0) , updateProfile);
router.get('/profile' , protect(Admin) , restrictTo(0) , getProfile);

router.route('/block-incharge')
    .post(protect(Admin) , restrictTo(0) , createBlockIncharge)
    .get(protect(Admin) , restrictTo(0) , getAllBlockIncharges);

router.route('/block-incharge/:id')
    .get(protect(Admin) , restrictTo(0) , getOneBlockIncharge)
    .put(protect(Admin) , restrictTo(0) , updateBlockIncharge)
    .delete(protect(Admin) , restrictTo(0) , deleteBlockIncharge)
    
router.route('/block-incharge/:id/team-members')
    .get(protect(Admin) , restrictTo(0) , getBlockInchargeTeamMembers)


module.exports = router;