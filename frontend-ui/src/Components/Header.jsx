import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBed, faPlane, faTaxi, faCar} from '@fortawesome/free-solid-svg-icons'
import Searchbar from './Searchbar'

const Header = ({type}) => {
    
  return (
    <div className='header'>
        <div className={type==='list' ? 'headerContainer listMode' : "headerContainer"}>
            <div className='headerList'>
                <div className='headerListItem'>
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className='headerListItem'>
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className='headerListItem'>
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car rentals</span>
                </div>
                <div className='headerListItem'>
                    <FontAwesomeIcon icon={faBed} />
                    <span>Attractions</span>
                </div>
                <div className='headerListItem'>
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport taxis</span>
                </div>
            </div>{
                type!=="list" &&
           
                <>
                <h1 className='headerTitle'>A lifetime of discounts? It's Genius.</h1>
                
                <p className='headerDesc'>Get Rewarded fror your travels - unlock instant saving of 10% or more with a free lamabooking account</p>
                
                <button className='headerBtn'>Sign in / Register</button>
            </>
        }
        </div>
        {type!=="list" && <Searchbar/>}
    </div>
  )
}

export default Header

