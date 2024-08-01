import React from 'react';
import { CDN_URL } from '../utils/config';

const RestaurantCard = ({resData}) => {
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData?.info;
    return (
        <div className='res-card'>
            <div className='res-image'>
                <img alt='food' src={CDN_URL+cloudinaryImageId} />
            </div>
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} mins</h4>
        </div>
    )
}

export default RestaurantCard;