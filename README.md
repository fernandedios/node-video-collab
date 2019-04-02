node-video-collab
=========

> NodeJS Express, Handlebars, Socket IO. MongoDB

NodeJS Express powered video chat and collaboration tool proof of concept

Getting Started
------------

Checkout this repo, install dependencies, configure, then start the app.

```bash
$ git clone git@github.com:fernandedios/node-video-collab.git
$ cd node-video-collab
$ npm install

-- configure app

$ npm start
```

Configuration
------------

This web application requires the following as starting point:
- [Facebook Application]
- [Gmail Account]

### Local Development Variables
```js
module.exports = {
  base: 'http://localhost:3000',
  email: 'your_email_address',
  peerServer: {
    host: 'localhost',
    port: 9001,
    secure: false // whether the peerJS server is in a secure server or not
  },
  mailer: {
    service: 'Gmail',
    auth: {
      user: 'your_gmail_address', // gmail account to use as mailer
      pass: 'your_gmail_password'
    }
  },
  dbConnstring: 'mongodb://your_mongodb_connection_string',
  sessionKey: 'session_key', // can be random string
  facebook: {
    clientID: 'facebook_app_client_id',
    clientSecret: 'facebook_app_client_secret',
    callback: 'http://localhost:3000/auth/facebook/callback'
  }
};
```

Save as 'dev.js' and place it inside the config folder.

### Production Environment Variables
You will need to add the following environment variables to your production host

```js
process.env.BASE_URL,
process.env.USER_EMAIL,
process.env.PEER_HOST,
process.env.PEER_PORT,
process.env.PEER_SECURE,
process.env.MAILER_SERVICE,
process.env.MAILER_USER,
process.env.MAILER_PASS
process.env.MONGO_URL,
process.env.SESSION_KEY
process.env.FB_CLIENTID,
process.env.FB_CLIENTSECRET,
process.env.FB_CALLBACK
```

### PeerJS Server
You will need to setup a separate peerJS server for production use.
You can use the companion peerJS server setup [here](https://github.com/fernandedios/node-video-collab-peer)


Preview
---------
Access the [application preview](https://node-video-collab.herokuapp.com).


Thanks
------

*node-video-collab* © 2019, Fernan de Dios.<br>

> [fernandedios.com](http://fernandedios.com) &nbsp;&middot;&nbsp;
> GitHub [@fernandedios](https://github.com/fernandedios) &nbsp;&middot;&nbsp;
> Twitter [@fernan_de_dios](https://twitter.com/fernan_de_dios)

[Facebook Application]: http://developers.facebook.com/
[Gmail Account]: https://www.gmail.com
