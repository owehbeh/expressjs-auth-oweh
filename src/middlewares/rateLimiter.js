const rateLimit = require('express-rate-limit');
const config = require('../config/config');
const authController = require('../controllers/auth.controller');
var MongoStore = require('rate-limit-mongo');

const authLimiter = rateLimit({
  windowMs: config.windowMs,
  max: 5,
  skipSuccessfulRequests: true,
  handler: authController.sendTooManyLoginsEmail,
  store: new MongoStore({
    uri: config.mongoose.url,
    expireTimeMs: config.windowMs,
  }),
});

module.exports = {
  authLimiter,
};
