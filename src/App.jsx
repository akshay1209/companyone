// eslint-disable-next-line import/no-named-as-default
import Home from './Screen/Home';
import Store from './Redux/Store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div>
      <Provider store={Store}>
      <Home />
      </Provider>
    </div>
  );
}

export default App;
