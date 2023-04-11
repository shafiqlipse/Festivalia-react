import React from 'react'

const PageHead = (props) => {
  return (
    <div className='page-head'>
         <div className="txt">
        <h1>{props.hed}</h1>
        <p>
          {props.par}
        </p>
      </div>
    </div>
  )
}

export default PageHead