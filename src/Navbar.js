import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route} from 'react-router-dom'
// import { Link } from 'react-router'
import {Link} from 'react-router-dom';
class Navbar extends Component{
  render(){
    return(
    <nav>
    <div className="nav-wrapper black">
      <a href="#" className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/RecentlyPlayed">RecentlyPlayed</Link></li>
        <li><Link to="/RecentlyPlayed">Top Album</Link></li>
        <li><Link to="/RecentlyPlayed">Top Artist</Link></li>
        <li><Link to="/RecentlyPlayed">Top Tracks</Link></li>
      </ul>
    </div>
  </nav>
    )
  }
}
export default Navbar
