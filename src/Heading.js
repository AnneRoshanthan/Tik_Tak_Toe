import React from "react";
import Footer from "./footer";

function Heading(props) {
  return (
      <div>
    <div>


    <nav class="navbar navbar-expand-md navbar-light fixed-top" style={{backgroundColor: "#c3073f", borderRadius: "10px"}}>
        <a class="navbar-brand center" href="#" style={{color:"white",fontSize:"20px"}}>Notabel App</a>
        
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav" >
            <li class="nav-item active">
              <a class="nav-link" style={{color: "white", marginLeft: "300px",fontSize:"17px"}} href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style={{color: "white",fontSize:"17px"}} href="https://anneroshanthan.github.io/Soundcloudmusic/" target="blank">Music App</a>
            </li>
          
          
            <li class="nav-item" ><a class="nav-link js-scroll-trigger" style={{color: "white",fontSize:"17px"}} href="https://ukilifexercise.blogspot.com/">Blog</a></li>
            <li class="nav-item" ><a class="nav-link js-scroll-trigger" style={{color: "white",fontSize:"17px"}} href="https://anneroshanthan.github.io/">Github</a></li>
            <li class="nav-item" ><a class="nav-link js-scroll-trigger" style={{color: "white",fontSize:"17px"}} href="https://www.linkedin.com/in/anne-roshanthan-05113a210/">Linked IN</a></li>
   
            
          </ul>
        </div>
      </nav>

      <br />

      <i class="fas fa-hand-point-right right"></i>
      <i class="fas fa-hand-point-left left"></i>
      <h1 className="display-3 heading"   style={{overflow:"hidden",marginTop:"3%"}}>Tic-Tac-Toe</h1>



    </div>
    
<Footer/>

    </div>
  );
}

export default Heading;
