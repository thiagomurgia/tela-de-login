import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    user: Model,
  },

  routes() {
    this.namespace = 'api';

    this.post('/users', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('user', data);
    });
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
reportWebVitals();
