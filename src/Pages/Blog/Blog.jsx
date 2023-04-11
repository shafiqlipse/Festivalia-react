import React from 'react'
import './blog.scss'
import { BoData } from './BlogData'

const Blog = () => {
  return (
    <div className='blog-page'>
        <div className='blog-head flex'>
          <h1>Insights</h1>
        </div>
        <div className="posts">
          {BoData.map((i)=>{
            return(
              <div className="post" key={i.id}>
                <img src={i.ImageUrl} alt="tarts" />
                <h1>{i.title}</h1>
                <p>{i.content.slice(0,125)}</p>
                <button className="btnub">Read more</button>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Blog