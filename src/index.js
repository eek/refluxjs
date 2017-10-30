var Reflux = require('reflux-core');

Reflux.serverMode = typeof window !== 'object';

Reflux.connect = require('./connect');

Reflux.connectFilter = require('./connectFilter');

Reflux.ListenerMixin = require('./ListenerMixin');

Reflux.listenTo = require('./listenTo');

Reflux.listenToMany = require('./listenToMany');

require('./addES6');

module.exports = Reflux;
