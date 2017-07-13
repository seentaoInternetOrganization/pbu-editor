/**
 * @author Chenzhyc
 * @description 富文本编辑器
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import asyncLoad from './asyncLoad';
import urljoin from 'url-join';

class PBUEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
    }

    componentDidMount() {
        window.UEDITOR_CONFIG = this.props.editorConfig;
        const baseUrl = this.props.editorConfig.UEDITOR_HOME_URL;
        asyncLoad(urljoin(baseUrl, 'ueditor.all.min.js'))
        .then(() => {
            this.editor = window.UE.getEditor(this.props.id);
            this.editor.addListener('contentChange', () => {
                this.props.onContentChange(this.editor.getContent())
            })
        })
    }

    /**
     * 设置编辑器内容
     * @param {string} content 文本内容
     * @param {boolean} isAppendTo 是否追加，默认true
     * 在React中通过ref来调用此方法
     * eg:
     *      this.refs.editor.setEditorContent('追加内容', true);
     */
    setEditorContent(content, isAppendTo = true) {
        this.editor.setContent(content, isAppendTo);
    }

    componentWillUnmount() {
        this.editor.removeListener('contentChange');
        this.editor.destroy();
    }

    render(){
        return (
            <div style={this.props.style}>
                <script id={this.props.id} name="content" type="text/plain" style={this.props.style}>
                    {this.props.defaultContent}
                </script>
            </div>
        )
    }
}

export default PBUEditor;

PBUEditor.propTypes = {
    /**
     * UEditor config
     * 详见: http://ueditor.baidu.com/doc/
     * 其中 UEDITOR_HOME_URL 为ueditor代码存放的服务器位置，如cdn或本身的应用服务器上
     */
    editorConfig: PropTypes.object,
    /**
     * 样式，默认{ width:1024, height:300 }
     */
    style: PropTypes.object,
    /**
     * 初始默认内容
     */
    defaultContent: PropTypes.string,
    /**
     * 文本发生变化时的回调
     * @param {string} content
     */
    onContentChange: PropTypes.func,
    /**
     * 富文本节点id，必传
     */
    id: PropTypes.string.isRequired,
}

PBUEditor.defaultProps = {
    defaultContent: '富文本编辑器',
    onContentChange: (content) => {},
    style: { width:1024, height:300 },
    id: 'container',
    editorConfig: {
        //为编辑器实例添加一个路径，这个不能被注释
        UEDITOR_HOME_URL: 'https://pbu.oss-cn-beijing.aliyuncs.com/webapps/pbu_editor/',
        // UEDITOR_HOME_URL: '/editor/',

        // 服务器统一请求接口路径
        serverUrl: "upload",

        //工具栏上的所有的功能按钮和下拉框，可以在new编辑器的实例时选择自己需要的重新定义
        toolbars: [
            [
                "fullscreen",
                "source",
                "|",
                "undo",
                "redo",
                "|",
                "bold",
                "italic",
                "underline",
                "fontborder",
                "strikethrough",
                "superscript",
                "subscript",
                "removeformat",
                "formatmatch",
                "autotypeset",
                "blockquote",
                "pasteplain",
                "|",
                "forecolor",
                "backcolor",
                "insertorderedlist",
                "insertunorderedlist",
                "selectall",
                "cleardoc",
                "|",
                "rowspacingtop",
                "rowspacingbottom",
                "lineheight",
                "|",
                "customstyle",
                "paragraph",
                "fontfamily",
                "fontsize",
                "|",
                "directionalityltr",
                "directionalityrtl",
                "indent",
                "|",
                "justifyleft",
                "justifycenter",
                "justifyright",
                "justifyjustify",
                "|",
                "touppercase",
                "tolowercase",
                "|",
                "link",
                "unlink",
                "anchor",
                "|",
                "imagenone",
                "imageleft",
                "imageright",
                "imagecenter",
                "|",
                "simpleupload",
                "insertimage",
                "emotion",
                "scrawl",
                "insertvideo",
                "music",
                "attachment",
                "map",
                "gmap",
                "insertframe",
                "insertcode",
                "webapp",
                "pagebreak",
                "template",
                "background",
                "|",
                "horizontal",
                "date",
                "time",
                "spechars",
                "snapscreen",
                "wordimage",
                "|",
                "inserttable",
                "deletetable",
                "insertparagraphbeforetable",
                "insertrow",
                "deleterow",
                "insertcol",
                "deletecol",
                "mergecells",
                "mergeright",
                "mergedown",
                "splittocells",
                "splittorows",
                "splittocols",
                "charts",
                "|",
                "print",
                "preview",
                "searchreplace",
                "drafts",
                "help"
            ]
        ]
    }
}
