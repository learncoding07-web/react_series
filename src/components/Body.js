import React, { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { RES_DATA as resData } from '../utils/mockData';
import { SWIGGY_API } from '../utils/config';
import Shimmer from './Shimmer';
const Body = () => {

    const [restroData, setRestroData] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchText, setSearchText] = useState("");

    const topRatedRestros = () => {
        setRestroData(()=> restroData.filter((restro,  index) => restro.info.avgRating > 4))
    }

    useEffect(()=> {
        fetchData();
    },[]);

    const fetchData = async() => {
        const data = await fetch(SWIGGY_API);
        const jsonData = await data.json();
        // optional chaining
        await setRestroData(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        await setFilteredList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const searchedRestro = () => {
        const restroList = restroData.filter((restro) => restro?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredList(restroList);
    }

    const handleSearch = (e) => {
        setSearchText(e.target.value);
        e.target.value != "" ? setSearchText(e.target.value) : setFilteredList(restroData);
    }

    return restroData.length === 0 ? <Shimmer/> : (
        <div className='body'>
            <div className='filter'>
                <div className='search'>
                    <input type='text' className='search-box' value={searchText} onChange={(e) => handleSearch(e)}/>
                    <button className='search-btn' onClick={searchedRestro} >Search</button>
                </div>
                <button className='filter-btn' onClick={topRatedRestros} >Top Rated Restaurants</button>
            </div>

            <div className='res-container'>
                {
                    filteredList.map((restro, index) => <RestaurantCard key={restro.info.id} resData={restro} />)
                }
            </div>
        </div>
    )
}

export default Body;