import React from "react";

function Header(){
    return(<> <nav class="navbar sticky-top" style={{backgroundColor:"#6E85B7"}}>
    <div class="container-fluid">
      Example
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </nav>  </>)
}

export default Header;