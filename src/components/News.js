import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
const News = (props) => {
    //  let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    const [state,setState]=useState({articles:[],page:1})
    const maxPages = Math.ceil(state.totalResults / 15); // Calculate max number of pages
     const num = Array.from({ length: maxPages }, (_, i) => i + 1);

    

    useEffect(() => {
        const fetchData = async (page) => {
          let url = `https://newsapi.org/v2/top-headlines?country=${props.country?props.country:"in"}&category=${props.category}&apiKey=6affd9d39afe427c9a6a2225ee7afab4&page=${state.page}&pageSize=15`
          let data = await fetch(url)
          let parseddata = await data.json()
          setState((prevState) => ({
            ...prevState,
            articles: parseddata.articles,
            totalResults: parseddata.totalResults,
          }));
        }
    
        fetchData(state.page)
      }, [props.country,props.category, state.page])

    // useEffect(() => {
    //     fetchData()
    //   }, [])
    
    const handlePageChange = (pageNumber) => {
        setState((prevState) => ({ ...prevState, page: pageNumber }));
      };
      const incr = ()=>{
        setState((prev)=>({...prev, page: state.page+1}))
      }
      const decr = ()=>{
        setState((prev)=>({...prev, page: state.page-1}))
      }
  return (
    <>
    <div style={{backgroundColor:"#f2eeee",textAlign:"center"}}>Rajasthan Tak-{props.category} </div>
      <div className="container my-2">
          
          
          <div className="row">
          {console.log(state.articles)}
          {state.articles&&
          state.articles.map((element)=>{
            return <div className="col-md-4 " key={element.url}>
            <Newsitem
              title={element.title?element.title.slice(0,45):""}
              description={element.description?element.description.slice(0,88):""}
              imgUrl={element.urlToImage}
              newsurl={element.url}
              publishedAt={element.publishedAt}
              author={element.author}
              source={element.source.name}
            />
          </div>
          })}
            
          </div>
          {/* <div className="container d-flex justify-content-between">
          <button className="btn btn-primary " disabled={this.state.page<=1} type="button" onClick={this.handlepre}> &laquo; previous</button>
          <button className="btn btn-primary" type="button" onClick={this.handlenext} disabled={this.state.page>=Math.ceil(this.state.totalResults/15)}>next &raquo;</button>
          </div> */}
        </div>
        <div className="container d-flex justify-content-center" style={{borderBottom:"4px solid #ffff00"}} >
            <button style={{backgroundColor: "transparent",border:"none"}} onClick={decr}>&laquo;</button>
          {num.map((n) => {
            return <button key={n} onClick={() => handlePageChange(n)} style={{ 
                marginLeft: "4px",
                borderRadius: "3px",
                backgroundColor: "transparent",
                ":hover": {
                    backgroundColor: "yellow",
                  },
                
            }}
            >{n}</button>
            
          })}
          <button style={{backgroundColor: "transparent",border:"none"}} onClick={incr}>&raquo;</button>
        </div>
    </>
  )
}

export default News
