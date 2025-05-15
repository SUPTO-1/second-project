'use client';
import { useEffect, useState } from "react";

import Image from "next/image";

const Meals = () => {
    const [search, setSearch] = useState("");
    const [meals, setMeals] = useState([]);

    const loadData = async()=>
    {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const data = await res.json();
        setMeals(data.meals);
    }
    const handleSearch = (e) =>
    {
        setSearch(e.target.value);
    }
    useEffect(()=>{
        loadData();
    },[search])
    return (
        <div className="mt-6">
                <input onChange={handleSearch} className="border-2 rounded-md shadow bg-gray-50 border-gray-300 px-3 py-2" type="text" placeholder="Search..." />
                <button className="ml-2 rounded-md shadow bg-blue-400 text-white p-2">Search</button>

                <div className="mt-10 grid grid-cols-3 gap-4">
                    {
                        meals?.slice(0,10).map((meal)=>(
                            <div key={meal.idMeal} className="p-8 border-2">
                                <Image src={meal.strMealThumb} width={400} height={400}></Image>
                                <h6>{meal.strMeal}</h6>
                                <p>{meal.strInstructions}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
    );
};

export default Meals;