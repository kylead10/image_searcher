import React from 'react';
import { Form } from 'react-bootstrap';
import './index.css';

const App = () => {
  return (
    <div className='container'>
      <h1 className='title'>Image Searcher</h1>
      <div className='search-section'>
        <Form>
          <Form.Control
            type='search'
            placeholder='Input something to search...'
          />
        </Form>
      </div>
    </div>
  );
};

export default App;
