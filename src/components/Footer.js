import React from 'react';

function Footer() {
  return (
    <footer className='my-footer'>
      <span>Powered By: </span>
      <img
        style={{ margin: '0  10px', maxWidth: '75px' }}
        src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg'
        alt='The Movie DB'
      />
    </footer>
  );
}

export default Footer;
