window.apiUrl = (typeof window.apiUrl === 'undefined') ? '/' : window.apiUrl;
window.baseUrl = (typeof window.baseUrl === 'undefined') ? '/' : window.baseUrl;
window.assetsUrl = (typeof window.assetsUrl === 'undefined') ? '/' : window.assetsUrl;

window._ = require('lodash');

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
    render() {
        return (
            <div>asdsadsad</div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
