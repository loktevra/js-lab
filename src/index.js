import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
import View from './view'
import Prjs from './prjs'

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

const content = (
    <Router history={appHistory}>
        <Route path='/'>
            <IndexRoute component={View.App} />
            {
                Prjs.map((v,i)=>(
                    <Route key={i} path={v.path} component={v.component}/>
                ))
            }
        </Route>
    </Router>
)

ReactDOM.render(
    content,
    document.getElementById('root')
);
