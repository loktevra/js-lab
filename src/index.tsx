import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './components/App';
import * as styles from './index.scss';

const domContainer = document.createElement('div');

domContainer.classList.add(styles.container);

document.body.appendChild(domContainer); 

ReactDOM.render(<App />, domContainer);
