import RestaurantCard from "./RestaurantCard";
import React, { useState, useEffect } from "react";
import data from "../utils/data.json";


const BodyLayout = ({ limit, showData  }) => {
    
    
    const [restaurantList, setRestaurantList] = useState([]);
    
    // useEffect(() => {
    //     fetchData();
    // }, []);

    // const fetchData = async () => {
    //     const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
    //     const json = await data.json();

    //     const restaurants =
    //     json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

    //     setRestaurantList(restaurants);
    // };


    useEffect(() => {
    const restaurants = 
       data?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    console.log()

    setRestaurantList(restaurants);
    }, []);

    const displayData = limit 
        ? restaurantList.slice(0, limit) 
        : restaurantList;

    return(
        <div className="bodyWrapper">
            <div className="container">
                {showData &&
                <div className="search">
                    <h1>Food Listing Dynamic Rendering Data From Data JSON...</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                </div>
                }

                <div className="res-container">
                     {
                        // restaurantList.map((restaurant) => (
                            displayData.map((restaurant) => (
                            <RestaurantCard
                                key={restaurant.info.id}
                                resName={restaurant.info.name}
                                cuisine={restaurant.info.cuisines.join(", ")}
                            />
                        ))
                    }
                </div>
                
               
            </div>
        </div>
    )
}


export default BodyLayout;