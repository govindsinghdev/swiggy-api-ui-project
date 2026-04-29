


const RestaurantCard = (props) =>{
    const {resName, cuisine} = props
    return(
        <div className="res-card">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/1/24/6c328640-97ea-43db-ad7f-2a02172aae32_7f6216666d3c045e38bca3e81a70a2a12.JPG" />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>4.5 Stars</h4>
            <h4>30 minutes</h4>
        </div>
    )
}

export default RestaurantCard;