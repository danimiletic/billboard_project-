import React from 'react';

const Billboard = ({ billboard }) => {

  const { name, id } = billboard
  return (
    <>
      <h3>{name}</h3>
      <a href={`/billboards/${id}/artists`}>Go to Artists</a>
      <br />
      <a href="/">Back</a>
    </>
  )
}

export default Billboard;