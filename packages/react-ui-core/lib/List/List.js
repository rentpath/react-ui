'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactUiUtils = require('@rentpath/react-ui-utils');

var _reactThemed = require('react-themed');

var _reactThemed2 = _interopRequireDefault(_reactThemed);

var _ListItem = require('./ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = (_dec = (0, _reactThemed2.default)('*', { pure: true }), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  (0, _inherits3.default)(List, _PureComponent);

  function List(props) {
    (0, _classCallCheck3.default)(this, List);

    var _this = (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || (0, _getPrototypeOf2.default)(List)).call(this, props));

    _this.generateRandomId();
    return _this;
  }

  (0, _createClass3.default)(List, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!(0, _isEqual2.default)(this.props.items, nextProps.items)) {
        this.generateRandomId();
      }
    }
  }, {
    key: 'generateRandomId',
    value: function generateRandomId() {
      this.id = (0, _reactUiUtils.randomId)('listItem');
    }
  }, {
    key: 'itemId',
    value: function itemId(index) {
      return this.id + '-' + index;
    }
  }, {
    key: 'itemComponentAndProps',
    value: function itemComponentAndProps(listItem) {
      return (0, _reactUiUtils.parseArgs)(listItem, _ListItem2.default);
    }
  }, {
    key: 'renderItem',
    value: function renderItem(item) {
      if (item && (typeof item === 'undefined' ? 'undefined' : (0, _typeof3.default)(item)) === 'object' && !_react2.default.isValidElement(item)) {
        var label = item.label,
            props = (0, _objectWithoutProperties3.default)(item, ['label']);

        return [label, props];
      } else if (typeof item === 'function') {
        return [item()];
      }
      return [item];
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          theme = _props.theme,
          NodeType = _props.nodeType,
          className = _props.className,
          items = _props.items,
          listItem = _props.listItem,
          orientation = _props.orientation,
          highlightIndex = _props.highlightIndex,
          selectedIndex = _props.selectedIndex,
          props = (0, _objectWithoutProperties3.default)(_props, ['theme', 'nodeType', 'className', 'items', 'listItem', 'orientation', 'highlightIndex', 'selectedIndex']);

      var _itemComponentAndProp = this.itemComponentAndProps(listItem),
          _itemComponentAndProp2 = (0, _slicedToArray3.default)(_itemComponentAndProp, 2),
          Item = _itemComponentAndProp2[0],
          baseProps = _itemComponentAndProp2[1];

      return _react2.default.createElement(
        NodeType,
        {
          className: (0, _classnames2.default)(theme.List, orientation && theme['List-' + orientation], className)
        },
        items.map(function (item, i) {
          var _renderItem = _this2.renderItem(item),
              _renderItem2 = (0, _slicedToArray3.default)(_renderItem, 2),
              children = _renderItem2[0],
              itemProps = _renderItem2[1];

          return _react2.default.createElement(
            Item,
            (0, _extends3.default)({}, baseProps, {
              'data-tid': 'list-item-' + i
            }, props, itemProps, {
              highlight: highlightIndex === i,
              selected: selectedIndex === i,
              key: _this2.itemId(i),
              index: i
            }),
            children
          );
        })
      );
    }
  }]);
  return List;
}(_react.PureComponent), _class2.propTypes = {
  theme: _propTypes2.default.object,
  className: _propTypes2.default.string,
  nodeType: _propTypes2.default.string,
  listItem: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func, _propTypes2.default.object]),
  items: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func, _propTypes2.default.shape({
    label: _propTypes2.default.node.isRequired
  })])),
  orientation: _propTypes2.default.string,
  highlightIndex: _propTypes2.default.number,
  selectedIndex: _propTypes2.default.number
}, _class2.defaultProps = {
  theme: {},
  nodeType: 'ul',
  items: [],
  orientation: 'vertical'
}, _temp)) || _class);
exports.default = List;