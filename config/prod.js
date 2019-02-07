'use strict'

module.exports = {
  email: process.env.USER_EMAIL,
  mailer: {
    service: process.env.MAILER_SERVICE,
    auth: {
      user: process.env.MAILER_USER,
      pass: process.env.MAILER_PASS
    }
  }
};
