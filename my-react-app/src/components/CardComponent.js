function Cards(props) {
    return (
        <> 
                <div className="card-container">
                    <div className="cardImg-container">
                        <img src= {`../images/${props.img}`} className="cardImg" />
                    </div>
                    <div className="cardSpans">
                        <span><img src="../images/Star1.png" className="star" /></span>
                        <span className="rating">{props.rating}</span>
                        <span className="followers">({props.reviewCount})</span>
                        <span className="location">•{props.location}</span>
                    </div>
                    <p className="comment">{props.title} <br/><b>From <span>${props.price}</span></b> / person</p>
                </div>    
        </>
    )
}
export default Cards;