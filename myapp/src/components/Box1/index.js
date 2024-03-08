import { Component } from "react";

import Box2 from "../Box2";

import './index.css'

const hydPlaces=[
    {
        imgUrl:"https://yometro.com/images/places/hyderabad.jpg",
        name:"charminar",
        unqId:1
    },
    {
        imgUrl:"https://upload.wikimedia.org/wikipedia/commons/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg",
        name:"taj Mahal",
        unqId:2
    },
    {
        imgUrl:"https://upload.wikimedia.org/wikipedia/commons/9/94/The_Golden_Temple_of_Amrithsar_7.jpg",
        name:"golden Temple",
        unqId:3
    },
    {
        imgUrl:"https://img.traveltriangle.com/blog/wp-content/uploads/2019/11/cover-image-of-Things-To-Do-In-Goa_22nd-nov.jpg",
        name:"goa",
        unqId:4
    },
    {
        imgUrl:"https://www.savaari.com/blog/wp-content/uploads/2024/01/Wonderla-Bangalore-1-1.webp",
        name:"wonderla",
        unqId:5
    },
    {
        imgUrl:"https://media.istockphoto.com/id/172124032/photo/mysore-palace-at-dusk.jpg?s=612x612&w=0&k=20&c=paO74C_dVsY14IbK0RNqs0TD-lSteQy-AW5CnQFEb_4=",
        name:"mysore palace",
        unqId:6
    },
]

class Box1 extends Component{
    state={
        inputs:"",
        places:hydPlaces,
    }

entered=(event)=>{

    this.setState({inputs:event.target.value})
}


onDelete1=(unqId)=>{
    const {places}=this.state
    const new1=places.filter((place) => place.unqId !== unqId);
    this.setState({places:new1});
}


    render(){

        const {places,inputs}=this.state
        const searchResults = places.filter(eachUser =>
            eachUser.name.includes(inputs)
          )


        return(
            <div className="box1">
                <div className="box2">
                    <h1>Places  to visit</h1>
                    <input className="imp" onChange={this.entered} type="search"/>
                    <button onClick={this.filterbtn} className="imp">Enter</button>
                </div>
                <ul className="placeList" >
          {searchResults.map(eachUser => (
            <Box2
            onDelete1={this.onDelete1}
              userDetails={eachUser}
              key={eachUser.unqId}
            />
          ))}
        </ul>
            </div>

        )
    }
}
export default  Box1;