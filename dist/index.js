'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Case = exports.Switch = exports.Default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Default = exports.Default = function Default(props) {
  return _react2.default.createElement(
    'span',
    null,
    props.children
  );
};

var isCase = function isCase(c) {
  return c.type === Case;
};
var isDefaultCase = function isDefaultCase(c) {
  return c.type === Default;
};

var Switch = exports.Switch = function Switch(props) {
  if (!Array.isArray(props.children)) return props.children;
  var childrenCase = props.children.filter(isCase);
  var childDefault = props.children.filter(isDefaultCase)[0];
  var reduceExprs = function reduceExprs(all, child) {
    return all || child.props.expr;
  };
  var showDefaultCase = !childrenCase.reduce(reduceExprs, false);
  var childrenToShow = showDefaultCase ? childDefault : childrenCase;
  return _react2.default.createElement(
    'span',
    null,
    childrenToShow
  );
};

var Case = exports.Case = function Case(props) {
  return props.expr ? props.children : null;
};