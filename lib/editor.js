'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _asyncLoad = require('./asyncLoad');

var _asyncLoad2 = _interopRequireDefault(_asyncLoad);

var _urlJoin = require('url-join');

var _urlJoin2 = _interopRequireDefault(_urlJoin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Chenzhyc
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 富文本编辑器
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var PBUEditor = function (_Component) {
    _inherits(PBUEditor, _Component);

    function PBUEditor(props) {
        _classCallCheck(this, PBUEditor);

        return _possibleConstructorReturn(this, (PBUEditor.__proto__ || Object.getPrototypeOf(PBUEditor)).call(this, props));
    }

    _createClass(PBUEditor, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            window.UEDITOR_CONFIG = this.props.editorConfig;
            var baseUrl = this.props.editorConfig.UEDITOR_HOME_URL;
            // asyncLoad(urljoin(baseUrl, 'ueditor.all.min.js'))
            // .then(() => {
            //     this.editor = window.UE.getEditor('container');
            // })
            (0, _asyncLoad2.default)((0, _urlJoin2.default)(baseUrl, 'ueditor.all.min.js'), function () {
                _this2.editor = window.UE.getEditor('container');
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.editor.destroy();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { style: this.props.style },
                _react2.default.createElement(
                    'script',
                    { id: 'container', name: 'content', type: 'text/plain' },
                    '\u8FD9\u91CC\u5199\u4F60\u7684\u521D\u59CB\u5316\u5185\u5BB9'
                )
            );
        }
    }]);

    return PBUEditor;
}(_react.Component);

exports.default = PBUEditor;


PBUEditor.propTypes = {
    //配置信息
    editorConfig: _propTypes2.default.object,
    //样式
    style: _propTypes2.default.object
};

PBUEditor.defaultProps = {
    editorConfig: {
        //为编辑器实例添加一个路径，这个不能被注释
        UEDITOR_HOME_URL: 'https://pbu.oss-cn-beijing.aliyuncs.com/webapps/pbu_editor/',
        // UEDITOR_HOME_URL: '/editor/',

        // 服务器统一请求接口路径
        serverUrl: "upload",

        //工具栏上的所有的功能按钮和下拉框，可以在new编辑器的实例时选择自己需要的重新定义
        toolbars: [["fullscreen", "source", "|", "undo", "redo", "|", "bold", "italic", "underline", "fontborder", "strikethrough", "superscript", "subscript", "removeformat", "formatmatch", "autotypeset", "blockquote", "pasteplain", "|", "forecolor", "backcolor", "insertorderedlist", "insertunorderedlist", "selectall", "cleardoc", "|", "rowspacingtop", "rowspacingbottom", "lineheight", "|", "customstyle", "paragraph", "fontfamily", "fontsize", "|", "directionalityltr", "directionalityrtl", "indent", "|", "justifyleft", "justifycenter", "justifyright", "justifyjustify", "|", "touppercase", "tolowercase", "|", "link", "unlink", "anchor", "|", "imagenone", "imageleft", "imageright", "imagecenter", "|", "simpleupload", "insertimage", "emotion", "scrawl", "insertvideo", "music", "attachment", "map", "gmap", "insertframe", "insertcode", "webapp", "pagebreak", "template", "background", "|", "horizontal", "date", "time", "spechars", "snapscreen", "wordimage", "|", "inserttable", "deletetable", "insertparagraphbeforetable", "insertrow", "deleterow", "insertcol", "deletecol", "mergecells", "mergeright", "mergedown", "splittocells", "splittorows", "splittocols", "charts", "|", "print", "preview", "searchreplace", "drafts", "help"]]
    }
};
//# sourceMappingURL=editor.js.map