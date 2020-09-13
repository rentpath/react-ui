"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactUiUtils = require("@rentpath/react-ui-utils");

var _reactThemed = _interopRequireDefault(require("@rentpath/react-themed"));

var _ListItem = _interopRequireDefault(require("./ListItem"));

var _dec, _class, _class2, _temp;

var List = (_dec = (0, _reactThemed.default)('*', {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(List, _PureComponent);

  function List(props) {
    var _this;

    (0, _classCallCheck2.default)(this, List);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(List).call(this, props));

    _this.generateRandomId();

    return _this;
  }

  (0, _createClass2.default)(List, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!(0, _isEqual.default)(this.props.items, nextProps.items)) {
        this.generateRandomId();
      }
    }
  }, {
    key: "generateRandomId",
    value: function generateRandomId() {
      this.id = (0, _reactUiUtils.randomId)('listItem');
    }
  }, {
    key: "itemId",
    value: function itemId(index) {
      return "".concat(this.id, "-").concat(index);
    }
  }, {
    key: "itemComponentAndProps",
    value: function itemComponentAndProps(listItem) {
      return (0, _reactUiUtils.parseArgs)(listItem, _ListItem.default);
    }
  }, {
    key: "renderItem",
    value: function renderItem(item) {
      if (item && (0, _typeof2.default)(item) === 'object' && !_react.default.isValidElement(item)) {
        var label = item.label,
            props = (0, _objectWithoutProperties2.default)(item, ["label"]);
        return [label, props];
      }

      if (typeof item === 'function') return [item()];
      return [item];
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          theme = _this$props.theme,
          NodeType = _this$props.nodeType,
          className = _this$props.className,
          items = _this$props.items,
          listItem = _this$props.listItem,
          orientation = _this$props.orientation,
          highlightIndex = _this$props.highlightIndex,
          selectedIndex = _this$props.selectedIndex,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["theme", "nodeType", "className", "items", "listItem", "orientation", "highlightIndex", "selectedIndex"]);

      var _this$itemComponentAn = this.itemComponentAndProps(listItem),
          _this$itemComponentAn2 = (0, _slicedToArray2.default)(_this$itemComponentAn, 2),
          Item = _this$itemComponentAn2[0],
          baseProps = _this$itemComponentAn2[1];

      return _react.default.createElement(NodeType, {
        className: (0, _classnames.default)(theme.List, orientation && theme["List-".concat(orientation)], className)
      }, items.map(function (item, i) {
        var _this2$renderItem = _this2.renderItem(item),
            _this2$renderItem2 = (0, _slicedToArray2.default)(_this2$renderItem, 2),
            children = _this2$renderItem2[0],
            itemProps = _this2$renderItem2[1];

        return _react.default.createElement(Item, (0, _extends2.default)({}, baseProps, {
          "data-tid": "list-item-".concat(i)
        }, props, itemProps, {
          highlight: highlightIndex === i,
          selected: selectedIndex === i,
          key: _this2.itemId(i),
          index: i
        }), children);
      }));
    }
  }]);
  return List;
}(_react.PureComponent), (0, _defineProperty2.default)(_class2, "propTypes", {
  theme: _propTypes.default.object,
  className: _propTypes.default.string,
  nodeType: _propTypes.default.string,
  listItem: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func, _propTypes.default.object]),
  items: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func, _propTypes.default.shape({
    label: _propTypes.default.node.isRequired
  })])),
  orientation: _propTypes.default.string,
  highlightIndex: _propTypes.default.number,
  selectedIndex: _propTypes.default.number
}), (0, _defineProperty2.default)(_class2, "defaultProps", {
  theme: {},
  nodeType: 'ul',
  items: [],
  orientation: 'vertical'
}), _temp)) || _class);
exports.default = List;