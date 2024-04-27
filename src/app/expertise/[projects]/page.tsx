import React from 'react'

function projects({params}:{params:{projects:string}}) {
  return (
    <div>project No. {params.projects}</div>
  )
}

export default projects