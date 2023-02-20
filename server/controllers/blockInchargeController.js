const BlockIncharge = require('../models/blockInchargeModel');
const userFactory = require('./factories/userFactory');
const Member = require('../models/memberModel');
const memberValidation = require('../validations/memberValidation');
const handlerFactory = require('./factories/handlerFactory');


exports.getProfile = userFactory.profile(BlockIncharge);
exports.login = userFactory.login(BlockIncharge);
exports.update = userFactory.updateProfile(BlockIncharge);

exports.createMember = userFactory.createUser(Member , memberValidation);
exports.getAllMembers = handlerFactory.getAll(Member);
exports.getOneMember = handlerFactory.getOne(Member);
exports.updateMember = handlerFactory.updateOne(Member);
exports.deleteMember = handlerFactory.deleteOne(Member);
exports.getMyTeamMembers = handlerFactory.getTeamMembers(Member);