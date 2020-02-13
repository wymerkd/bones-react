import React from 'react'
import { Link } from 'react-router-dom';

function NavLinks(){
  return(
    <div>
      <Link to="/">Home</Link>
      <Link to="/test">Test</Link>
      <Link to="/testtwo">TestTwo</Link>
    </div>
  );
}

export default NavLinks;
