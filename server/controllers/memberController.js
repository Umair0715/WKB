const userFactory = require('./factories/userFactory');
const Member = require('../models/memberModel');

exports.login = userFactory.login(Member);
exports.getProfile = userFactory.profile(Member);
exports.update = userFactory.updateProfile(Member);