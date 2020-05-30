import React from 'react';
import { Icon, Header } from 'semantic-ui-react';

function AppHeader({ text }) {
  return (
    <Header as='h2' dividing style={{ padding: '2rem 2rem 2rem 0' }}>
      <Icon name='film' color='teal' />
      <Header.Content>{text}</Header.Content>
    </Header>
  );
}

export default AppHeader;
