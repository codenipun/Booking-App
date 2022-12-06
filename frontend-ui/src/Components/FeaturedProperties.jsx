import React from 'react'
import useFetch from '../hooks/useFetch';

const FeaturedProperties = () => {

  const { data, loading } = useFetch(
    "/hotels?featured=true&limit=4"
  );

  return (
    <div className="fp">
    {loading ? "loading" :
      (<>
        {
          data.map((item, i)=>(
            <div className="fpItem" key={i}>
              <img
                src={data[i].images[0]}
                alt=""
                className="fpImg"
              />
              <span className="fpName">{data[i].name}</span>
              <span className="fpCity">{data[i].city}</span>
              <span className="fpPrice">Starting from $ {data[i].cheapestPrice}</span>
             {item.rating && <div className="fpRating">
                <button>{data[i].rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))
        }
      </>)
    }  
    </div>
  )
}
export default FeaturedProperties
