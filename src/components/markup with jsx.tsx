import React, { Fragment } from 'react'

{/* <Fragment> accepts key</Fragment> */}
{/* <>it don't uses/accepts key</> */}
function ABoutPage() {
  return (
    <Fragment >
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </Fragment>
  )
}
export default ABoutPage