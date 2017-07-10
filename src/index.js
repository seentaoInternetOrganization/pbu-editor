import dva, { connect } from 'dva';
import { Router, Route } from 'dva/router';
import fetch from 'dva/fetch';
import React from 'react';
import './index.html';
import PBUEditor from './editor';

const app = dva();

const HomePage = () =>
    <div>Hello Dva.
        <PBUEditor style={{ width: 900, height: 900 }}/>
    </div>;

app.router(({ history }) =>
    <Router history={history}>
        <Route path="/" component={HomePage} />
    </Router>
);

// 4. Start
app.start('#root');
