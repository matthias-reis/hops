
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var ReactRedux = require('react-redux');

var defaults = require('./defaults');

exports.render = function(overrides) {
  var options = Object.assign({}, defaults, overrides || {});
  var store = options.createStore(options.reducers);
  var history = store.history;
  var routes = options.routes;
  var mountPoint = document.querySelector(options.mountPoint);
  ReactDOM.render(
    React.createElement(ReactRedux.Provider, { store: store },
      React.createElement(ReactRouter.Router, { history: history }, routes)
    ),
    mountPoint
  );
  return mountPoint;
};

Object.assign(exports, require('./store'), require('./network'));
