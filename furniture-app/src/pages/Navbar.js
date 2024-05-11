import { Link } from "react-router-dom"

function Navbar (){
    return(
     <nav class="navbar navbar-expand-lg" style={{borderRadius:"10px",width:"100%",height:"100px"}}>
   <div class="container-fluid">
     <Link class="navbar-brand" to="/"><img src="https://tse3.mm.bing.net/th?id=OIP.V88ra-ZCV3rC5Lvneo_E2QHaFj&pid=Api&P=0&h=180" style={{height:"100px"}} ></img></Link>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         <li class="nav-item">
           <Link class="nav-link active" aria-current="page" to="/">Home</Link>
         </li>
         <li class="nav-item">
           <Link class="nav-link" to="furniture">Furniture</Link>
         </li>                                                                                                                                                                                 
         <li><input type="text" placeholder="SEARCH" style={{width:"600px",}} ></input></li>
         <li style={{marginLeft:"8%"}} className="tag"><i class="fa-solid fa-truck-fast"></i></li>
         <li style={{marginLeft:"8%"}} className="tag"><i class="fa-regular fa-user"></i></li>
         <li style={{marginLeft:"8%"}} className="tag"><i class="fa-solid fa-cart-shopping"></i></li>
         </ul>
     </div>
   </div>
 </nav>
    )
 }

 export default Navbar