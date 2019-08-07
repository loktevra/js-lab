import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { MainPage } from '../MainPage';
import { IndexPage } from '../IndexPage/IndexPage';
import { projects } from '../../prjs';
import * as styles from './App.scss';

export function App () {

  return (
    <HashRouter>
      <MainPage />
      <Switch>
        <Route path="/" exact component={IndexPage} />
          {projects.map(project => (
            <Route key={`/${project.path}`} path={`/${project.path}`} component={() => (
                <div className={styles.wrapper}>
                  <project.component />
                </div>
              )}
              />
          ))}
      </Switch>
    </HashRouter>
  )
}
