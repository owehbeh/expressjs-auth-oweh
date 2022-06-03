const nodemailer = require('nodemailer');
const config = require('../config/config');
const logger = require('../config/logger');
const nodemailerSendgrid = require('nodemailer-sendgrid');

// const transport = nodemailer.createTransport(config.email.smtp);
const transport = nodemailer.createTransport(
  nodemailerSendgrid({
    apiKey: config.email.sendgrid_api,
  })
);

/**
 * Send an email
 * @param {string} to
 * @param {string} subject
 * @param {string} text
 * @returns {Promise}
 */
const sendEmail = async (to, subject, text) => {
  const msg = { from: config.email.from, to, subject, text };
  await transport.sendMail(msg);
};

/**
 * Send verification email
 * @param {string} to
 * @param {string} token
 * @returns {Promise}
 */
const sendTooManyLoginsEmail = async (to) => {
  const coolDownTime = config.windowMs / 60 / 1000;
  const subject = 'Account Locked';
  const text = `Dear User,

Someone, hopefully, you have been failing to log in to your account linked to this email,
if this was, you have run out of login tries, please wait for ${coolDownTime} minutes before you try again.
If this was not you, please contact our support`;
  await sendEmail(to, subject, text);
};

module.exports = {
  transport,
  sendEmail,
  sendTooManyLoginsEmail,
};
