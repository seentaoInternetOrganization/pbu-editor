# PBUEditor
> 封装了一下百度的ueditor
#### 安装
```js
npm i pbu_editor --save
```

#### 使用
```js
import React from 'react';
import ReactDOM from 'react-dom';
import PBUEditor from '../../';

ReactDOM.render(<PBUEditor />, mountedDom);
```

#### 参数接口说明
```js
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
     * 文本内容
     */
    content: PropTypes.string

    /**
     * 设置编辑器内容
     * @param {string} content 文本内容
     * @param {boolean} isAppendTo 是否追加，默认true
     * 在React中通过ref来调用此方法
     * eg:
     *      this.refs.editor.setEditorContent('追加内容', true);
     */
    setEditorContent(content, isAppendTo = true)
```
