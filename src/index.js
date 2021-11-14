let port = process.env.PORT;
if (port == null || port == '') {
  port = 8000;
}
import React from 'react';
import './styles/normalize.scss';
import './styles/global.scss';
import ReactDOM from 'react-dom';
import App from './components/App/AppContainer';
import { Provider } from 'react-redux';
import store from './redux/store';


App.listen(port);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));

