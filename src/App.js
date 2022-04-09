import React from 'react';
import { BrowserRouter }  from 'react-router-dom';
import { Layout } from './components/Layout';
import Router from './Router';
import { Footer } from './components/Footer';

function App() {
  return (
    <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

