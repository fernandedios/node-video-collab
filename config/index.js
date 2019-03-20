if (process.env.NODE_ENV === 'production') {
	module.exports = require('./prod'); // export prod keys
}

else if (process.env.NODE_ENV === 'test') {
	module.exports = require('./testing'); // export test keys
}

else {
	module.exports = require('./dev'); // export dev keys
}
