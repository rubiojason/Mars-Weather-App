import React, { useState, useEffect } from 'react'
import { getCurrentDate } from './TodayDate'
//import { getTomorrowDate } from './TomorrowData'
//import {getTwoDayDate } from './TwoDate'
import axios from 'axios'
//import { gsap } from 'gsap/all';

function MarsWeather() {

    const [loading, setLoading] = useState(false)

    //PAGE LOAD PAGE LOAD PAGE LOAD
    const [pageNumber, setPageNumber] = useState(1)

    //PAGE LOAD PAGE LOAD PAGE LOAD

    const [dates, setDates] = useState(getCurrentDate)

    //today 
    const [number1, setNumber1] = useState()
    const [number2, setNumber2] = useState()
    const [number3, setNumber3] = useState()

    const [bigBoiNumber, setBigBoiNumber] = useState()

    const [minTemp, setMinTemp] = useState()
    const [averageTemp, setAverageTemp] = useState()
    const [maxTemp, setMaxTemp] = useState()

    const [minWindSpeed, setMinWindSpeed] = useState()
    const [averageWindSpeed, setAverageWindSpeed] = useState()
    const [maxWindSpeed, setMaxWindSpeed] = useState()

    const [windDirection, setWindDirection] = useState()

    const [minPressure, setMinPressure] = useState()
    const [averagePressure, setAveragePressure] = useState()
    const [maxPressure, setMaxPressure] = useState()

    const [season, setSeason] = useState()

    //WEATHER WEATHER WEATHER WEATHER WEATHER


    useEffect(() => {
        setLoading(true)
        axios.get('https://api.nasa.gov/insight_weather/?api_key=aaHyI2vQJqDaaId6lzEjVJwJR3rqYGwDiz1RRrXQ&feedtype=json&ver=1.0')
        .then(res => res.data) 
        
        .then(stays => {
            const {
            sol_keys,
            validity_checks,
            ...numberData
            } = stays

            var temp = Object.entries(numberData).map(([number, tem]) => {
                return {
                    number: number,

                    minTemp: tem.AT.mn,
                    averageTemp: tem.AT.av,
                    maxTemp: tem.AT.mx,

                    minWindSpeed: tem.HWS?.mn,
                    averageWindSpeed: tem.HWS?.av,
                    maxWindSpeed: tem.HWS?.mx,

                    windDirection: tem.WD.most_common?.compass_point,

                    minPressure: tem.PRE?.mn,
                    avergagePressure: tem.PRE?.av,
                    maxPressure: tem.PRE?.mx,

                    season: tem.Season,
                }
            })
            //DAY 1
            setNumber1(temp[1]['number'])
            setNumber2(temp[2]['number'])
            

            setBigBoiNumber(temp[pageNumber]['number'])

            setMinTemp(temp[pageNumber]['minTemp'].toFixed(1))
            setAverageTemp(temp[pageNumber]['averageTemp'].toFixed(1))
            setMaxTemp(temp[pageNumber]['maxTemp'].toFixed(1))

            setMinWindSpeed(temp[pageNumber]['minWindSpeed'].toFixed(1))
            setAverageWindSpeed(temp[pageNumber]['averageWindSpeed'].toFixed(1))
            setMaxWindSpeed(temp[pageNumber]['maxWindSpeed'].toFixed(1))

            setWindDirection(temp[pageNumber]['windDirection'])

            setMinPressure(temp[pageNumber]['minPressure'].toFixed(0))
            setAveragePressure(temp[pageNumber]['avergagePressure'].toFixed(0))
            setMaxPressure(temp[pageNumber]['maxPressure'].toFixed(0))
            
            setSeason(temp[pageNumber]['season'])
        })  

        .catch(err => {
            console.log(err)

        })
        setLoading(false)
    }, [])

    return (


        <div>
            {
                loading ? <div>Loading...</div>: <div> hello {minTemp}</div>
            }
        

        {/*<div className="app">

        <div className="big-boi">{loading}</div>

            <div className="topSpace">
                <div className="checkbox">
                    <div className="circle1">
                        {number1}
                    </div>
                    <div className="circle2" >
                        {number2}
                    </div>
                    <div className="circle3">
                        {number3}
                    </div>
                </div>
            </div>

            <div className="outerContent">

                <div className="leftNext">
                    <div className="relative">

                        <div className="leftNextButton" >
                            <div className="arrow-left"></div>
                        </div>

                    </div>
                </div>
                

                <div className="content">

                    <nav className="contentNav">

                        <div className="temperature">
                            <div className="TEMP">{averageTemp} </div> 
                            <div className="faren"> F</div>
                        </div>

                        <div className="sectionsInNav0">

                            <div className="minTemp">
                                <div className="minTempLogo">
                                    Min Temp
                                </div>
                                <div className="actualMinTemp">
                                    <span>{minTemp}</span>
                                    <span className="abre">F</span>
                                </div>
                            </div>  

                            <div className="maxTemp">
                                <div className="maxTempLogo">
                                    Max Temp
                                </div>
                                <div className="actualMaxTemp">
                                    <span>{maxTemp}</span>
                                    <span className="abre">F</span>
                                </div>
                            </div> 

                        </div>

                        <div className="sectionsInNav1">
                            <div className="Wind">Wind: </div>
                            <div className="windDirection">{windDirection}</div>

                            <div className="divFlex">

                                <div className="minWind"> 
                                    <div className="minWindLogo">Min </div> 
                                    <div className="actualMinWind">
                                        <span> {minWindSpeed}</span>
                                        <span className="abre">m/s</span>
                                    </div>
                                </div>

                                <div className="averageWind">
                                    <div className="averageWindLogo">Median </div> 
                                    <div className="actualAverageWind">
                                        <span> {averageWindSpeed}</span>
                                        <span className="abre">m/s</span>
                                    </div>
                                </div>  

                                <div className="maxWind">
                                    <div className="maxWindLogo">Max </div> 
                                    <div className="actualMaxWind">
                                        <span> {maxWindSpeed}</span>
                                        <span className="abre">m/s</span>
                                    </div>
                                </div> 
                            </div>

                        </div>

                        <div className="sectionsInNav2">
                            <div className="Pressure">Pressure: </div> 

                            <div className="pressureFlex">

                                <div className="minPressure">
                                    <div className="minPressureLogo">Min</div>

                                    <div className="actualMinPressure">
                                        <span>{minPressure}</span>
                                        <span className="abre">pa</span>
                                    </div>
                                </div>

                                <div className="averagePressure">
                                    <div className="averagePressureLogo">Median</div>

                                    <div className="actualAveragePressure">
                                        <span>{averagePressure}</span>
                                        <span className="abre">pa</span>
                                    </div> 
                                </div>

                                <div className="maxPressure">
                                    <div className="maxPressureLogo">Max</div>

                                    <div className="actualMaxPressure">
                                        <span>{maxPressure}</span>
                                        <span className="abre">pa</span>
                                    </div> 
                                </div>

                            </div>
      
                        </div>

                        <div className="sectionsInNav3">
                            <div className="season">Season: </div>
                            <div className="actualSeason">{season}</div>
                        </div>

                        
                    </nav>


                    <div className="restOfContent">

                        <div className="Sol">
                            <span>Sol {bigBoiNumber}</span>
                        </div>

                        <div className="dateDiv">
                            <span className="date">{dates}</span>
                        </div>

                        <div className="text">
                            NASA’s InSight Mars lander takes continuous weather measurements 
                            (temperature, wind, pressure) on the surface of Mars at Elysium 
                            Planitia, a flat, smooth plain near Mars’ equator. To find more 
                            information on this data please visit 
                            <a href="https://mars.nasa.gov/insight/weather/" 
                            alt="" className="link">  https://mars.nasa.gov/insight/weather/</a>
                        </div>

                        <div className="belowText">
                            <div className="PressureBelow">Pressure: </div> 

                            <div className="pressureFlexBelow">

                                <div className="minPressureBelow">
                                    <div className="minPressureLogoBelow">Min</div>

                                    <div className="actualMinPressureBelow">
                                        <span>{minPressure}</span>
                                        <span className="abre">pa</span>
                                    </div>
                                </div>

                                <div className="averagePressureBelow">
                                    <div className="averagePressureLogoBelow">Median</div>

                                    <div className="actualAveragePressureBelow">
                                        <span>{averagePressure}</span>
                                        <span className="abre">pa</span>
                                    </div> 
                                </div>

                                <div className="maxPressureBelow">
                                    <div className="maxPressureLogoBelow">Max</div>

                                    <div className="actualMaxPressureBelow">
                                        <span>{maxPressure}</span>
                                        <span className="abre">pa</span>
                                    </div> 
                                </div>

                            </div>
  
                        </div>

                    </div>
                </div>

                <div className="rightNext">
                    <div className="relative">

                        <div className="rightNextButton">
                            <div className="arrow-right"></div>
                        </div>
                    </div>
                </div>

            </div>

        </div>*/}
        </div>
    )
}

export default MarsWeather
