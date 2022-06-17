import configureStore from 'redux-mock-store'
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

export const findByTestAttr = (component: any, attr: string) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const withProviderAndRouter = (children: any) => {
  const middlewares = [thunk]
  const mockStore = configureStore(middlewares);
  const store = mockStore({
    weather: [],
    isLoading: false,
    isLoadingCard: '',
    error: false
  });

  return (
    <Provider store={store}>
      <Router>
        {children}
      </Router>
    </Provider>
  )
};
