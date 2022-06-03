const { version } = require('../../package.json');
const config = require('../config/config');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'API documentation',
    version,
  },
  servers: [
    {
      url: `${
        config.env === 'development' ? 'http://localhost:' + config.port : 'https://express-auth-demo-owehbeh.herokuapp.com'
      }/api`,
    },
  ],
};

module.exports = swaggerDef;
