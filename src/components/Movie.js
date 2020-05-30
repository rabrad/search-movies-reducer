import React from 'react';
import { Card, Image, Icon, Modal, Header } from 'semantic-ui-react';

function Movie({ movie }) {
  const poster = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const CHAR_COUNT = 75;

  return (
    <Modal
      trigger={
        <Card color='teal'>
          <Image src={poster} alt={movie.title} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{movie.title}</Card.Header>
            <Card.Meta>Release date: {movie.release_date} </Card.Meta>

            <Card.Description>
              {`${movie.overview.slice(0, CHAR_COUNT)}${
                movie.overview.length > CHAR_COUNT ? '... ' : ''
              }`}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name='star' color='teal' />
            {movie.vote_average}/10
          </Card.Content>
        </Card>
      }>
      <Modal.Header>{movie.title}</Modal.Header>
      <Modal.Content image>
        <Image
          wrapped
          size='large'
          src={poster}
          style={{ minWidth: '200px' }}
        />
        <Modal.Description>
          <Header>Movie overview</Header>
          <p>{movie.overview}</p>
          <br />
          <p>
            <span role='img' aria-label='release date'>
              🍿
            </span>
            Release date: {movie.release_date}
          </p>
          <p>
            <span role='img' aria-label='Original title'>
              🎬
            </span>
            Original title: {movie.original_title}
          </p>
          <p>
            <span role='img' aria-label='rate'>
              ⭐️
            </span>
            Original title: {movie.vote_average}/10
          </p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

export default Movie;
