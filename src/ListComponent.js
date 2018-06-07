import React, { Component } from 'react'
import { Route} from 'react-router-dom'
class ListComponent extends Component{
  render(){
    // console.log(this.props.UserDetail)
    return(
      <ol>
      {this.props.UserDetail.map((User)=>

        <li>
        <div className ="row">{User.id}</div>
        <div className="col l3 m4 col s9 card card_design">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator responsive-img" src="{User.imgsrc}"/>
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">{User.name}<i className="material-icons right">more_vert</i></span>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">{User.name}<i className="material-icons right">close</i></span>
            </div>
        </div>
        </li>
      )}
      </ol>
    )
  }
}
export default ListComponent
