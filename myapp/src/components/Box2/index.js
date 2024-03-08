const Box2=(props)=>{
    const{userDetails,onDelete1}=props
    const {name,imgUrl,unqId}=userDetails

    const onDelete=()=>{
        onDelete1(unqId)
    }

    return(
        <div className="box3">
            <div className="c1">
                <img alt="img" className="img1" src={imgUrl}/>
            <h5>{name}</h5>
            <button onClick={onDelete} className="btn1">Visited</button>
            </div>
        </div>
    )
}
export default Box2