/* 

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

ReactDOM.render(<App />, document.getElementById('app'));

------------------------------------------------------------------------

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(<App headerProp = "Header from props..." contentProp = "Content
   from props..."/>, document.getElementById('app'));

export default App;

-----------------------------------------------------------------------------------------

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App2 from './App2';

ReactDOM.render(<App />, document.getElementById('app'));

ReactDOM.render(<App1 />, document.getElementById('app2'));

---------------------------------------------------------------------------------------------------------

import React from 'react';
import ReactDOM from 'react-dom';
import App,{App1} from './App';

ReactDOM.render(<App />, document.getElementById('app'));

ReactDOM.render(<App1 />, document.getElementById('app2'));