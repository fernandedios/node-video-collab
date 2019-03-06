'use strict'

module.exports = {
  base: process.env.BASE_URL + ':' + process.env.PORT,
  email: process.env.USER_EMAIL,
  peerServer: {
    host: process.env.PEER_HOST,
    port: process.env.PEER_PORT,
    secure: process.env.PEER_SECURE,
  },
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
    clientSecret: process.env.FB_CLIENTSECRET,
    callback: process.env.FB_CALLBACK
  }
};
