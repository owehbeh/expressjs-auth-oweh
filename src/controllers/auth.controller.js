const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { authService, userService, tokenService, emailService } = require('../services');

const register = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  const tokens = await tokenService.generateAuthTokens(user);
  res.status(httpStatus.CREATED).send({ user, tokens });
});

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginUserWithEmailAndPassword(email, password);
  const tokens = await tokenService.generateAuthTokens(user);
  res.send({ user, tokens });
});

const sendTooManyLoginsEmail = catchAsync(async (req, res) => {
  await emailService.sendTooManyLoginsEmail(req.body.email);
  res.status(429).send('Too Many Requests');
});

module.exports = {
  register,
  login,
  sendTooManyLoginsEmail,
};
