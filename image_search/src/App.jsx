import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import './index.css';

const App = () => {
  const searchInput = useRef(null);

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(searchInput.current.value);
  };
  return (
    <div className='container'>
      <h1 className='title'>Image Searcher</h1>
      <div className='search-section'>
        <Form onSubmit={handleSearch}>
          <Form.Control
            type='search'
            placeholder='Input something to search...'
            className='search-input'
            ref={searchInput}
          />
        </Form>
      </div>
      <div className='filters'>
        <div>Nature</div>
        <div>Bird</div>
        <div>Cats</div>
        <div>Shoes</div>
      </div>
    </div>
  );
};

export default App;
