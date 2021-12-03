import React from 'react';

const Billboard = ({ billboard }) => {

  const { name, created_at, id, } = billboard
  return (
    <>
      <h3>{name}</h3>
      <p>
        Created: {created_at}, id: {id}
      </p>
      <a href="/">Back</a>
    </>
  )
}

export default Billboard;