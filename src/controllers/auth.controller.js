const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { authService, userService, tokenService, emailService } = require('../services');
const ApiError = require('../utils/ApiError');

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
  const code = httpStatus.TOO_MANY_REQUESTS;
  const message = httpStatus['429_MESSAGE'];
  throw new ApiError(code, message);
});

module.exports = {
  register,
  login,
  sendTooManyLoginsEmail,
};
