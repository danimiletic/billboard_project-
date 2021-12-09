import React from 'react';

const BillboardNew = ({ billboard }) => {

  const { name, description, image } = billboard 
  const defaultName = name ? name : ""
  const defaultDescription = description ? name : ""
  const defaultImage = image ? image : ""
  return (
    <>
      <h1>Create new Billboard</h1>
      <form action="/billboards" method="post">
        <input
          type="text"
          placeholder="Billboard name"
          required
          defaultValue={defaultName}
          name="billboard[name]"
        />
        <input
          type="text"
          placeholder="Billboard description"
          required
          defaultValue={defaultDescription}
          name="billboard[description]"
        />
        <input
          type="text"
          placeholder="Billboard image"
          required
          defaultValue={defaultImage}
          name="billboard[image]"
        />
        <button type="submit">Add Billboard</button>
      </form>
      <a href="/billboards">Back to Billboards</a>
    </>
  )
}

export default BillboardNew;