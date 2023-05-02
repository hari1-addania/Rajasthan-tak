import React from 'react'
import "./Nav.css"
const footer = () => {
  return (
    <>
      <div style={{backgroundColor:"#f1f2fa",textAlign:"center",
      marginTop:"55px" ,
      
    
    }}>
        
      <img src="/logo.jpg" alt="logo" style={{width:"45px",marginRight:"5px",marginTop:"40px",width:"80px",height:"80px",marginBottom:"40px"}}/>
      <div>
        <a href="/general" style={{textDecoration:"none",color:"black",marginLeft:"11px"}}>Home <span style={{color:"grey",fontSize:"10px"}}>.</span></a>
        <a href="/general"  style={{textDecoration:"none" ,color:"black" ,marginLeft:"11px"}}>Privacy Policy <span style={{color:"grey",fontSize:"10px"}}>.</span></a>
        <a href="/general"  style={{textDecoration:"none" ,color:"black" ,marginLeft:"11px"}}>Terms & Condition <span style={{color:"grey",fontSize:"10px"}}>.</span></a>
        <a href="/general"  style={{textDecoration:"none" ,color:"black" ,marginLeft:"11px"}}>Contact <span style={{color:"grey",fontSize:"10px"}}>.</span></a>
      </div>

      <div style={{marginTop:"40px",marginBottom:"40px"}}>
        
        <a href="https://www.facebook.com/rajasthantakofficial/" style={{textDecoration:"none",color:"black",marginLeft:"20px"}} target='_blank'> <img src="/fb.png" alt="" style={{width:"20px"}}/> </a>
        <a href="https://twitter.com/rajasthan_tak"  style={{textDecoration:"none" ,color:"black" ,marginLeft:"20px"}} target='_blank'> <img src="/twitter.png" alt=""style={{width:"20px"}} /> </a>
        <a href="https://www.youtube.com/c/RajasthanTakofficial"  style={{textDecoration:"none" ,color:"black" ,marginLeft:"20px"}} target='_blank'> <img src="/ig.png" alt="" style={{width:"20px"}}/> </a>
        <a href="https://www.instagram.com/rajasthan.tak/"  style={{textDecoration:"none" ,color:"black" ,marginLeft:"20px"}} target='_blank'> <img src="/yt.png" alt=""style={{width:"20px"}} /> </a>
      </div>
      
      <p>&copy; 2022. All Rights Reserved by RajasthanTak</p>
      


    </div>
    
    </>
  )
}

export default footer
