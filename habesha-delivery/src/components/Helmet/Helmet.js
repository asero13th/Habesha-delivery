import React from 'react'

const Helmet = ({title, children}) => {
    document.title = "habesha-delivery " + title
  return (
    <div className='m-100'>{children}</div>
  )
}

export default Helmet