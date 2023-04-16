import React from 'react'

const Helmet = (props) => {
    document.title = "habesha-delivery " + props.title
  return (
   
    <div className='m-100'>{props.children}</div>
  )
}

export default Helmet