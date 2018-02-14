const fact = require('random-fact');

function WebpackRandomFactPlugin() {
}

/**
 * @desc Run the random fact method after webpack has finished compiling.
 * @param compiler
 */
WebpackRandomFactPlugin.prototype.apply = function (compiler) {
    compiler.plugin('emit', function () {
        fact();
    });
};

module.exports = WebpackRandomFactPlugin;