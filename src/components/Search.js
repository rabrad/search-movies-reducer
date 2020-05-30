import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';

export default function SearchMovie({ search }) {
  const [query, setQuery] = useState('');

  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };

  const callSearchQuery = (e) => {
    e.preventDefault();
    search(query);
    setQuery('');
  };
  return (
    <Form className='my-form'>
      <Form.Group unstackable>
        <Form.Input
          width={8}
          type='text'
          placeholder='Search a movie'
          value={query}
          onChange={handleOnChange}
        />
        <Form.Button
          content='Search'
          onClick={callSearchQuery}
          type='submit'
          width={2}
        />
      </Form.Group>
    </Form>
  );
}
