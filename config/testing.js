'use strict'

module.exports = {
  base: 'http://localhost:3000',
  email: 'fernandedios@gmail.com',
  peerServer: {
    host: 'localhost',
    port: 9001,
    secure: false
  },
  mailer: {
    service: 'Gmail',
    auth: {
      user: 'fernantester@gmail.com',
      pass: 'v2F1pRl0pawIjo+ohO7r'
    }
  },
  dbConnstring: 'mongodb://user:nodePass123Word@ds125945.mlab.com:25945/node-video',
  sessionKey: 'adnffdkdSIWL1235l',
  facebook: {
    clientID: '2228996167429029',
    clientSecret: '0755e7ec9818ddd8d176eaa819e3f44b',
    callback: 'http://localhost:3000/auth/facebook/callback'
  }
};
