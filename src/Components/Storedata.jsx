import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
const Storedata = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState(''); 

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(res => {
        console.log(res?.data.products, "json");
        setData(res?.data.products);
       })
  }, []);
  return (
    <div>
      <div>
        <center>
          <h1 className='store-name'>STORE</h1>
        </center>
        <hr/>
      </div>
      <div>
        <center>
        <input type='text' placeholder='search' className='search-bar' value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}/>
        </center>
        
        <ul>
          <h4>
            {data.filter(item=>item.title.toLowerCase().includes(searchInput.toLowerCase())).map(item => (
              <p className='mainDiv' key={item.id}>
                <img src={item.images[0]} alt={item.name} className='image' /><br />
                {item.title} <br />
                ${item.price}<br /> {item.brand} <br /><br />
                <div className='btn-div'><button className='btn-click'>Buy Now</button></div>
              </p>
            ))}
          </h4>
        </ul>
      </div>
    </div>
  )
}

export default Storedata;