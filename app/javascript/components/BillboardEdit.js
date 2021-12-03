import React from 'react';

const BillboardEdit = ({ billboard }) => {

  const { name, id } = billboard 
  const defaultName = name ? name : ""
  return (
    <>
      <h1>Edit Billboard</h1>
      <form action={`/billboards/${id}`} method="post">
        {}
        <input type='hidden' name='_method' value="patch" /> 
        <input
          type="text"
          placeholder="Billboard name"
          required
          defaultValue={defaultName}
          name="billboard[name]"
        />
        <button type="submit">Update Billboard</button>
      </form>
      <a href="/billboards">Back to Billboards</a>
    </>
  )
}

export default BillboardEdit;