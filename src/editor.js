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
    }

    componentDidMount() {

        window.UEDITOR_CONFIG = this.props.editorConfig;
        const baseUrl = this.props.editorConfig.UEDITOR_HOME_URL;
        asyncLoad(urljoin(baseUrl, 'ueditor.all.min.js'))
        // .then(asyncLoad(urljoin(baseUrl, 'lang/zh-cn/zh-cn.js')))
        .then(() => {
            this.editor = window.UE.getEditor('container');
        })
        // asyncLoad(urljoin(baseUrl, 'ueditor.all.min.js'), () => {
        //     this.editor = window.UE.getEditor('container');
        // })
    }

    componentWillUnmount() {
        this.editor.destroy();
    }

    render(){
        return (
            <div style={this.props.style}>
                <script id="container" name="content" type="text/plain">

                </script>
            </div>
        )
    }
}

export default PBUEditor;

PBUEditor.propTypes = {
    //配置信息
    editorConfig: PropTypes.object,
    //样式
    style: PropTypes.object,
    //占位文本
    placeholder: PropTypes.string
}

PBUEditor.defaultProps = {
    placeholder: '富文本编辑器',
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
