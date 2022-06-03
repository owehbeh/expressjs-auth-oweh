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
      url: `/api`,
    },
  ],
};

module.exports = swaggerDef;
