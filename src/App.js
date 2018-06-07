import React, { Component } from 'react'
import { Route} from 'react-router-dom'
import Navbar from './Navbar'
import LoginPortal from './LoginPortal'
import ListComponent from './ListComponent'
const UserDetail=[
  {
    id:"123",
    song:"Hi there",
    imgsrc:""
  },
  {
    id:"234",
    song:"Hello sir",
    imgsrc:""
  },
  {
    id:"567",
    song:"Hi sagar",
    imgsrc:""
  }
]
//getall:- To get all the songs for user
//Recently:-Recently played songs
//mostplayed
class App extends Component{
  render(){
    return(
      <div className="container">
        <Navbar/>
        <Route exact path="/" render={()=>(
        <LoginPortal/>
      )}/>
      <Route exact path="/RecentlyPlayed" render={()=>(
      <ListComponent UserDetail={UserDetail}/>
    )}/>
      </div>
    )
  }
}
export default App
