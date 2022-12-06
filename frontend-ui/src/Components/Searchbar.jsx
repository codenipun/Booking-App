import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBed, faCalendarDays, faPerson} from '@fortawesome/free-solid-svg-icons'
import {DateRange} from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'
import { useNavigate } from 'react-router-dom';


const Searchbar = () => {
    const navigate = useNavigate()
    const [opendatepicker, setopendatepicker] = useState(false)
    const [destination, setDestination] = useState("")
    const [date, setDate] = useState([
    {
        startDate : new Date(),
        endDate: new Date(),
        key : 'selection'
    }
    ]);

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adults : 1,
        childrens : 0,
        rooms : 1
    });
    const handleSearch = () =>{
        navigate("/hotels", {state:{destination, date, options}})
    }
    const handleOption = (name, operation) =>{
        setOptions((prev)=>{
            return {
                ...prev, [name] : operation==='i' ? options[name] + 1 : options[name]-1,
            }
        })
    }
  return (
      <div className='headerSearchBar'>
        <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faBed} className='headerIcon'/>
            <input required type='text'
                 placeholder='Where are you going?'
                 className='headerSearchInput'
                    onChange={e=>setDestination(e.target.value)}
                 />
        </div>
        <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon'/>
            <span onClick={()=>setopendatepicker(!opendatepicker)} className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
            {opendatepicker &&
            <DateRange
                editableDateInputs = {true}
                onChange = {item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className='date'
                minDate={new Date()}
            />}
        </div>
        <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faPerson} className='headerIcon'/>
            <span onClick={()=>setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adults} adults | ${options.childrens} children | ${options.rooms} rooms`}</span>
            {openOptions &&
                <div className='options'>
                    <div className='optionItem'>
                        <span className='optionText'>Adults</span>
                        <div className='optionCounter'>
                            <button disabled={options.adults<=1}  className='optionCounterBtn' onClick={()=>handleOption("adults", "d")}>-</button>
                            <span className='optionCounterNumber'>{options.adults}</span>
                            <button className='optionCounterBtn' onClick={()=>handleOption("adults", "i")}>+</button>
                        </div>
                    </div>
                    <div className='optionItem'>
                        <span className='optionText'>Children</span>
                        <div className='optionCounter'>
                            <button disabled={options.childrens<=0} className='optionCounterBtn' onClick={()=>handleOption("childrens", "d")}>-</button>
                            <span className='optionCounterNumber'>{options.childrens}</span>
                            <button className='optionCounterBtn' onClick={()=>handleOption("childrens", "i")}>+</button>
                        </div>
                    </div>
                    <div className='optionItem'>
                        <span className='optionText'>Rooms</span>
                        <div className='optionCounter'>
                            <button disabled={options.rooms<=1}  className='optionCounterBtn' onClick={()=>handleOption("rooms", "d")}>-</button>
                            <span className='optionCounterNumber'>{options.rooms}</span>
                            <button className='optionCounterBtn' onClick={()=>handleOption("rooms", "i")}>+</button>
                        </div>
                    </div>
                </div>
            }            
        </div>
        <div className='headerSearchItem'>
            <button className='headerBtn' onClick={handleSearch}>Search</button>
        </div>
    </div>
  )
}

export default Searchbar
