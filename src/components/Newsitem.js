import React from 'react'

const Newsitem = (props) => {
    let {title,  imgUrl, newsurl, publishedAt, author,source} = props
  return (
    <>
       {/* <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill " style={{zIndex:1,backgroundColor:'#ffc247',padding:'10px'}}>
    {source}
    
  </span> */}
        {/* <div className="card my-2"style={{boxShadow:'#f5f5f5 2px 2px 3px 3px'}}>
        
          <img
            src={
              imgUrl
                ? imgUrl
                : "https://i0.wp.com/indiaeducationdiary.in/wp-content/uploads/2020/08/Default-Image-IED.png?fit=534%2C462&ssl=1"
            }
            className="card-img-top"
            alt="..."
            
          />
          
           

          <div className="container mt-2">
            By {!author ? "author" : author} on{" "}
            {new Date(publishedAt).toLocaleTimeString()}
          </div>
          <div className="card-body" >
            <h5 className="card-title">{title}   </h5>
            
            <a
              href={newsurl}
              target="_blank"
              rel="noreferrer"
              className="btn btm-sm btn-info"
            >
              read more
            </a>
          </div>
        </div> */}


{/* <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill " style={{zIndex:1,backgroundColor:'#ffc247',padding:'10px'}}>
  {source}
</span> */}
<div className="card my-2" style={{boxShadow:'#f5f5f5 2px 2px 3px 3px'}}>
  <a href={newsurl} target="_blank" rel="noreferrer" style={{textDecoration:"none",color:"black"}}>
    <img
      src={
        imgUrl
          ? imgUrl
          : "https://i0.wp.com/indiaeducationdiary.in/wp-content/uploads/2020/08/Default-Image-IED.png?fit=534%2C462&ssl=1"
      }
      className="card-img-top"
      alt="..."
    />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
    </div>
  </a>
  <div className="container mt-2">
    By {!author ? "author" : author} on{" "}
    {new Date(publishedAt).toDateString()}
  </div>
</div>

    </>
  )
}

export default Newsitem
