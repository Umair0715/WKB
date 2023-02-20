const { 
    getProfile , update , login , createMember , updateMember , deleteMember , getOneMember , getAllMembers, getMyTeamMembers 
} = require('../controllers/blockInchargeController');
const { protect , restrictTo } = require('../middlewares/protect');
const BlockIncharge = require('../models/blockInchargeModel');
const router = require('express').Router();


router.get('/profile' , protect(BlockIncharge) , getProfile);
router.put('/update' , protect(BlockIncharge) , update);
router.post('/login' , login);

router.route('/members')
    .post(protect(BlockIncharge) , restrictTo(1) , createMember)
    .get(protect(BlockIncharge) , restrictTo(1) , getAllMembers);

router.route('/members/:id')
    .get(protect(BlockIncharge) , restrictTo(1) , getOneMember)
    .put(protect(BlockIncharge) , restrictTo(1) , updateMember)
    .delete(protect(BlockIncharge) , restrictTo(1) , deleteMember)

router.route('/team-members/:id')
    .get(protect(BlockIncharge) , restrictTo(1) , getMyTeamMembers);
    

module.exports = router;