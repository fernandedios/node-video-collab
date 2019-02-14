'use strict'

module.exports = {
  base: process.env.BASE_URL,
  email: process.env.USER_EMAIL,
  mailer: {
    service: process.env.MAILER_SERVICE,
    auth: {
      user: process.env.MAILER_USER,
      pass: process.env.MAILER_PASS
    }
  },
  dbConnstring: process.env.MONGO_URL,
  sessionKey: process.env.SESSION_KEY,
  facebook: {
    clientID: process.env.FB_CLIENTID,
    clientSecret: process.env.FB_CLIENTSECRET
  }
};
