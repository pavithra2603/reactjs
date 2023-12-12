import React from 'react'
import {Link,Outlet} from 'react-router-dom'

const NavBar=()=>
{
return(
    <nav className='nav'>
    <ul className='navbar-list'>
     
    <Link to ="/" className="nav-link"><button>Home</button></Link>
   <Link to ="/Add" className="nav-link"><button>Add</button></Link>
    
     <Link to ="/Update" className="nav-link"><button>Update</button></Link>
    
     <Link to ="/Delete" className="nav-link"><button>Delete</button></Link>
     
    </ul><Outlet/>
    </nav>
)
}
export default NavBar