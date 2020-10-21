import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
//import { gsap } from 'gsap/all';
import { getCurrentDate } from './TodayDate'
import { getTomorrowDate } from './TomorrowData'
import { getTwoDayDate } from './TwoDate'
import { gsap, TimelineLite, Power3 } from 'gsap/all'


function MarsWeatherApp() {

    //current state 

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
 
    //date 
    const [todayDate] = useState(getCurrentDate)
    const [tomorrowDate] = useState(getTomorrowDate)
    const [twoDayDate] = useState(getTwoDayDate)
    const [todayDateCheck, setTodayDateCheck] = useState(true)
    const [tomorrowDateCheck, setTomorrowDateCheck] = useState(false)
    //date 

    //change switch color
    const [degreeCheck, setDegreeCheck] = useState(-1)
    const [farenheitColor, setFarenheitColor] = useState('rgba(22, 49, 114, 0.4)')
    const [celciusColor, setCelciusColor] = useState('rgb(255, 255, 255)')
    //change switch color

    //api state 
    const [dayChange, setDayChange] = useState(0)

    //sol day
    const [solDay1, setSolDay1] = useState('')
    const [solDay2, setSolDay2] = useState('')
    const [solDay3, setSolday3] = useState('')
    const [sol1Check, setSol1Check] = useState(true)
    const [sol2Check, setSol2Check] = useState(false)
    //sol day

    //big boi temp
    const [bigBoiTemp1, setBigBoiTemp1] = useState('')
    const [bigBoiTemp2, setBigBoiTemp2] = useState('')
    const [bigBoiTemp3, setBigBoiTemp3] = useState('')
    const [bigBoiTemp1Check, setBigBoiTemp1Check] = useState(true)
    const [bigBoiTemp2Check, setBigBoiTemp2Check] = useState(false)
    const [bigBoiTemp3Check, setBigBoiTemp3Check] = useState(false)
    //big boi temp

    //wind 
    const [minWind1, setMinWind1] = useState('')
    const [minWind2, setMinWind2] = useState('')
    const [minWind3, setMinWind3] = useState('')
    const [minWind1Check, setMinWind1Check] = useState(true)
    const [minWind2Check, setMinWind2Check] = useState(false)

    const [midWind1, setMidWind1] = useState('')
    const [midWind2, setMidWind2] = useState('')
    const [midWind3, setMidWind3] = useState('')
    const [midWind1Check, setMidWind1Check] = useState(true)
    const [midWind2Check, setMidWind2Check] = useState(false)

    const [maxWind1, setMaxWind1] = useState('')
    const [maxWind2, setMaxWind2] = useState('')
    const [maxWind3, setMaxWind3] = useState('')
    const [maxWind1Check, setMaxWind1Check] = useState(true)
    const [maxWind2Check, setMaxWind2Check] = useState(false)
    //wind

    //temperature
    const [minTemp1, setMinTemp1] = useState('')
    const [minTemp2, setMinTemp2] = useState('')
    const [minTemp3, setMinTemp3] = useState('')
    const [minTemp1Check, setMinTemp1Check] = useState(true)
    const [minTemp2Check, setMinTemp2Check] = useState(false)
    const [minTemp3Check, setMinTemp3Check] = useState(false)

    const [midTemp1, setMidTemp1] = useState('')
    const [midTemp2, setMidTemp2] = useState('')
    const [midTemp3, setMidTemp3] = useState('')
    const [midTemp1Check, setMidTemp1Check] = useState(true)
    const [midTemp2Check, setMidTemp2Check] = useState(false)
    const [midTemp3Check, setMidTemp3Check] = useState(false)

    const [maxTemp1, setMaxTemp1] = useState('')
    const [maxTemp2, setMaxTemp2] = useState('')
    const [maxTemp3, setMaxTemp3] = useState('')
    const [maxTemp1Check, setMaxTemp1Check] = useState(true)
    const [maxTemp2Check, setMaxTemp2Check] = useState(false)
    const [maxTemp3Check, setMaxTemp3Check] = useState(false)
    //temperature

    //pressure 
    const [minPressure1, setMinPressure1] = useState('')
    const [minPressure2, setMinPressure2] = useState('')
    const [minPressure3, setMinPressure3] = useState('')
    const [minPressure1Check, setMinPressure1Check] = useState(true)
    const [minPressure2Check, setMinPressure2Check] = useState(false)

    const [midPressure1, setMidPressure1] = useState('')
    const [midPressure2, setMidPressure2] = useState('')
    const [midPressure3, setMidPressure3] = useState('')
    const [midPressure1Check, setMidPressure1Check] = useState(true)
    const [midPressure2Check, setMidPressure2Check] = useState(false)

    const [maxPressure1, setMaxPressure1] = useState('')
    const [maxPressure2, setMaxPressure2] = useState('')
    const [maxPressure3, setMaxPressure3] = useState('')
    const [maxPressure1Check, setMaxPressure1Check] = useState(true)
    const [maxPressure2Check, setMaxPressure2Check] = useState(false)
    //pressure

    const [check, setCheck] = useState(true)
    const [farenCel, setFarenCel] = useState('F')
    //api state 
    
    const [firstDayColor, setFirstDayColor] = useState('rgb(255, 255, 255)')
    const [secondDayColor, setSecondDayColor] = useState('rgb(200, 200, 200)')
    const [thirdDayColor, setThirdDayColor] = useState('rgb(200, 200, 200)')

    const [minTempText] =  useState('Min Temp')
    const [midTempText] =  useState('Mid Temp')
    const [maxTempText] =  useState('Max Temp')

    const [minTemperatureText] = useState('Min Temperature')
    const [midTemperatureText] = useState('Mid Temperature')
    const [maxTemperatureText] = useState('Max Temperature')
    //curent state 

    //refs 
    const bodyRef = useRef(null)
    const sideNavRef = useRef(null)

    const bigBoi = useRef(null)
    const nextToBigBoi = useRef(null)

    const minWindRef = useRef(null)
    const midWindRef = useRef(null)
    const maxWindRef = useRef(null)

    const minTempRef = useRef(null)
    const midTempRef = useRef(null)
    const maxTempRef = useRef(null)

    const minPressureRef = useRef(null)
    const midPressureRef = useRef(null)
    const maxPressureRef = useRef(null)

    const leftTitleRef = useRef(null)
    const switchButtonRef = useRef(null)

    const rightDayOne = useRef(null)
    const rightDayTwo = useRef(null)
    const rightDayThree = useRef(null)

    const refMinWind = useRef(null)
    const refMidWind = useRef(null)
    const refMaxWind = useRef(null)

    const refMinTemp = useRef(null)
    const refMidTemp = useRef(null)
    const refMaxTemp = useRef(null)

    const refMinPressure = useRef(null)
    const refMidPressure = useRef(null)
    const refMaxPressure = useRef(null)
    //refs 

    //functions 
    const handleCelFar = () => {
        setDegreeCheck(prevColor => prevColor + 1)

        gsap.from([refMinTemp.current, refMidTemp.current, refMaxTemp.current], {
            ease: Power3.easeOut,
            delay: 0.6,
            duration: 1.25,
            opacity: 0,
        })

        gsap.from(bigBoi.current, { 
            y: 30,
            ease: Power3.easeOut,
            autoAlpha: 0,
            delay: 0.8,
            duration: 1.75,
        })

        if (degreeCheck % 2 !== 0) {
            setCheck(false)
            setFarenCel('C')
            setFarenheitColor('rgb(255, 255, 255)')
            setCelciusColor('rgba(22, 49, 114, 0.4)')
          }
          else {
              setCheck(true)
              setFarenCel('F')
              setFarenheitColor('rgba(22, 49, 114, 0.4)')
              setCelciusColor('rgba(255, 255, 255)')
          }
      }

    const handleTodayClick = () => {

        if (sol1Check) {
            return 
        }
        else {
            gsap.from([minWindRef.current, midWindRef.current, maxWindRef.current], {
                y: 16,
                ease: 'Power3.easeOut',
                delay: 1.2,
                duration: 1.1,
            })

            gsap.from([minTempRef.current, midTempRef.current, maxTempRef.current], {
                y: 16,
                ease: 'Power3.easeOut',
                delay: 1.45,
                duration: 1.1,
            })

            gsap.from([minPressureRef.current, midPressureRef.current, maxPressureRef.current], {
                y: 16,
                ease: 'Power3.easeOut',
                delay: 1.7,
                duration: 1.1,
            })

            gsap.from([refMinWind.current, refMidWind.current, refMaxWind.current], {
                ease: Power3.easeOut,
                delay: 2.45,
                duration: 1.25,
                opacity: 0,
            })

            gsap.from([refMinTemp.current, refMidTemp.current, refMaxTemp.current], {
                ease: Power3.easeOut,
                delay: 2.7,
                duration: 1.25,
                opacity: 0,
            })

            gsap.from([refMinPressure.current, refMidPressure.current, refMaxPressure.current], {
                ease: Power3.easeOut,
                delay: 2.8,
                duration: 1.25,
                opacity: 0,
            })

            gsap.from(bigBoi.current, { 
                y: 30,
                ease: Power3.easeOut,
                autoAlpha: 0,
                delay: 3.5,
                duration: 1.75,
            })

            gsap.from(nextToBigBoi.current, {
                x: 30,
                ease: Power3.easeOut,
                autoAlpha: 0,
                delay: 3.6,
                duration: 1.75,
            })

            setFirstDayColor('rgb(255, 255, 255)')
            setSecondDayColor('rgb(200, 200, 200)')
            setThirdDayColor('rgb(200, 200, 200)')

            setSol1Check(true)
            setSol2Check(false)

            setTodayDateCheck(true)
            setTomorrowDateCheck(false)
            //setTwoDayDateCheck(false)

            setBigBoiTemp1Check(true)
            setBigBoiTemp2Check(false)
            setBigBoiTemp3Check(false)

            setMinWind1Check(true)
            setMinWind2Check(false)

            setMidWind1Check(true)
            setMidWind2Check(false)

            setMaxWind1Check(true)
            setMaxWind2Check(false)

            setMinTemp1Check(true)
            setMinTemp2Check(false)
            setMinTemp3Check(false)

            setMidTemp1Check(true)
            setMidTemp2Check(false)
            setMidTemp3Check(false)

            setMaxTemp1Check(true)
            setMaxTemp2Check(false)
            setMaxTemp3Check(false)

            setMinPressure1Check(true)
            setMinPressure2Check(false)

            setMidPressure1Check(true)
            setMidPressure2Check(false)

            setMaxPressure1Check(true)
            setMaxPressure2Check(false)
        }
    }

    const handleTomorrowClick = () => {

        if (sol2Check) {
            return 
        } 
        else {
            gsap.from([minWindRef.current, midWindRef.current, maxWindRef.current], {
                y: 16,
                ease: 'Power3.easeOut',
                delay: 1.2,
                duration: 1.1,
            })

            gsap.from([minTempRef.current, midTempRef.current, maxTempRef.current], {
                y: 16,
                ease: 'Power3.easeOut',
                delay: 1.45,
                duration: 1.1,
            })

            gsap.from([minPressureRef.current, midPressureRef.current, maxPressureRef.current], {
                y: 16,
                ease: 'Power3.easeOut',
                delay: 1.7,
                duration: 1.1,
            })

            gsap.from([refMinWind.current, refMidWind.current, refMaxWind.current], {
                ease: Power3.easeOut,
                delay: 2.45,
                duration: 1.25,
                opacity: 0,
            })

            gsap.from([refMinTemp.current, refMidTemp.current, refMaxTemp.current], {
                ease: Power3.easeOut,
                delay: 2.7,
                duration: 1.25,
                opacity: 0,
            })

            gsap.from([refMinPressure.current, refMidPressure.current, refMaxPressure.current], {
                ease: Power3.easeOut,
                delay: 2.8,
                duration: 1.25,
                opacity: 0,
            })

            gsap.from(bigBoi.current, { 
                y: 30,
                ease: Power3.easeOut,
                autoAlpha: 0,
                delay: 3.5,
                duration: 1.75,
            })

            gsap.from(nextToBigBoi.current, {
                x: 30,
                ease: Power3.easeOut,
                autoAlpha: 0,
                delay: 3.6,
                duration: 1.75,
            })

            setFirstDayColor('rgb(200, 200, 200)')
            setSecondDayColor('rgb(255, 255, 255)')
            setThirdDayColor('rgb(200, 200, 200)')

            setSol1Check(false)
            setSol2Check(true)

            setTodayDateCheck(false)
            setTomorrowDateCheck(true)
            //setTwoDayDateCheck(false)

            setBigBoiTemp1Check(false)
            setBigBoiTemp2Check(true)
            setBigBoiTemp3Check(false)

            setMinWind1Check(false)
            setMinWind2Check(true)

            setMidWind1Check(false)
            setMidWind2Check(true)

            setMaxWind1Check(false)
            setMaxWind2Check(true)

            setMinTemp1Check(false)
            setMinTemp2Check(true)
            setMinTemp3Check(false)

            setMidTemp1Check(false)
            setMidTemp2Check(true)
            setMidTemp3Check(false)

            setMaxTemp1Check(false)
            setMaxTemp2Check(true)
            setMaxTemp3Check(false)

            setMinPressure1Check(false)
            setMinPressure2Check(true)

            setMidPressure1Check(false)
            setMidPressure2Check(true)

            setMaxPressure1Check(false)
            setMaxPressure2Check(true)
        }
    }

    const handleTwoDayClick = () => {

        if (sol1Check === true && sol2Check === true) {
            return 
        }

        else {
            gsap.from([minWindRef.current, midWindRef.current, maxWindRef.current], {
                y: 16,
                ease: 'Power3.easeOut',
                delay: 1.2,
                duration: 1.1,
            })

            gsap.from([minTempRef.current, midTempRef.current, maxTempRef.current], {
                y: 16,
                ease: 'Power3.easeOut',
                delay: 1.45,
                duration: 1.1,
            })

            gsap.from([minPressureRef.current, midPressureRef.current, maxPressureRef.current], {
                y: 16,
                ease: 'Power3.easeOut',
                delay: 1.7,
                duration: 1.1,
            })

            gsap.from([refMinWind.current, refMidWind.current, refMaxWind.current], {
                ease: Power3.easeOut,
                delay: 2.45,
                duration: 1.25,
                opacity: 0,
            })

            gsap.from([refMinTemp.current, refMidTemp.current, refMaxTemp.current], {
                ease: Power3.easeOut,
                delay: 2.7,
                duration: 1.25,
                opacity: 0,
            })

            gsap.from([refMinPressure.current, refMidPressure.current, refMaxPressure.current], {
                ease: Power3.easeOut,
                delay: 2.8,
                duration: 1.25,
                opacity: 0,
            })

            gsap.from(bigBoi.current, { 
                y: 30,
                ease: Power3.easeOut,
                autoAlpha: 0,
                delay: 3.5,
                duration: 1.75,
            })

            gsap.from(nextToBigBoi.current, {
                x: 30,
                ease: Power3.easeOut,
                autoAlpha: 0,
                delay: 3.6,
                duration: 1.75,
            })

            setFirstDayColor('rgb(200, 200, 200)')
            setSecondDayColor('rgb(200, 200, 200)')
            setThirdDayColor('rgb(255, 255, 255)')

            setSol1Check(false)
            setSol2Check(false)

            setTodayDateCheck(false)
            setTomorrowDateCheck(false)
            //setTwoDayDateCheck(true)

            setBigBoiTemp1Check(false)
            setBigBoiTemp2Check(false)
            setBigBoiTemp3Check(true)

            setMinWind1Check(false)
            setMinWind2Check(false)

            setMidWind1Check(false)
            setMidWind2Check(false)

            setMaxWind1Check(false)
            setMaxWind2Check(false)

            setMinTemp1Check(false)
            setMinTemp2Check(false)
            setMinTemp3Check(true)

            setMidTemp1Check(false)
            setMidTemp2Check(false)
            setMidTemp3Check(true)

            setMaxTemp1Check(false)
            setMaxTemp2Check(false)
            setMaxTemp3Check(true)

            setMinPressure1Check(false)
            setMinPressure2Check(false)

            setMidPressure1Check(false)
            setMidPressure2Check(false)

            setMaxPressure1Check(false)
            setMaxPressure2Check(false)

        }
        
    }

    
    const handleResize = (e) => {
        setWindowWidth(window.innerWidth)
    }
    //functions 

    //useEffect 

    useEffect(() => {
        window.addEventListener('resize', handleResize());
    }, [])

    useEffect(() => {
        window.removeEventListener('resize', handleResize());
    },[])

    useEffect(() => { 
        //first few
        gsap.from(bodyRef.current, {
            ease: Power3.easeOut,
            delay: 0.1,
            duration: 0.5,
            opacity: 0,
        })

        gsap.from(sideNavRef.current, {
            ease: Power3.easeOut,
            delay: 0.2,
            duration: 0.5, 
            opacity: 0,
        })

        gsap.from(leftTitleRef.current, {
            ease: Power3.easeOut,
            delay: 0.5,
            duration: 1,
            opacity: 0,
        })

        gsap.from(switchButtonRef.current, {
            ease: Power3.easeOut,
            delay: 0.7,
            duration: 1,
            opacity: 0,
        })
            //first few

            //day control
        gsap.from([rightDayOne.current, rightDayTwo.current, rightDayThree.current], {
            y: -20,
            ease: 'Power3.easeOut',
            delay: 1.1,
            duration: 1
        })
            //day control

            //big piece of data
            gsap.from([minWindRef.current, midWindRef.current, maxWindRef.current], {
                y: 16,
                ease: 'Power3.easeOut',
                delay: 1.5,
                duration: 1.1,
            })

            gsap.from([minTempRef.current, midTempRef.current, maxTempRef.current], {
                y: 16,
                ease: 'Power3.easeOut',
                delay: 1.75,
                duration: 1.1,
            })

            gsap.from([minPressureRef.current, midPressureRef.current, maxPressureRef.current], {
                y: 16,
                ease: 'Power3.easeOut',
                delay: 2,
                duration: 1.1,
            })
            //big piece of data

            //big piece of data
            gsap.from([refMinWind.current, refMidWind.current, refMaxWind.current], {
                ease: Power3.easeOut,
                delay: 2.75,
                duration: 1.25,
                opacity: 0,
            })

            gsap.from([refMinTemp.current, refMidTemp.current, refMaxTemp.current], {
                ease: Power3.easeOut,
                delay: 3,
                duration: 1.25,
                opacity: 0,
            })

            gsap.from([refMinPressure.current, refMidPressure.current, refMaxPressure.current], {
                ease: Power3.easeOut,
                delay: 3.25,
                duration: 1.25,
                opacity: 0,
            })
            //big piece of data

            gsap.from(bigBoi.current, { 
                y: 30,
                ease: Power3.easeOut,
                autoAlpha: 0,
                delay: 4,
                duration: 1.75,
            })

            gsap.from(nextToBigBoi.current, {
                x: 30,
                ease: Power3.easeOut,
                autoAlpha: 0,
                delay: 4,
                duration: 1.75,
            })
        }, [])


    useEffect(() => {
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

                        minWind: tem.HWS.mn,
                        midWind: tem.HWS.av,
                        maxWind: tem.HWS.mx,

                        minTemp: tem.AT.mn,
                        midTemp: tem.AT.av,
                        maxTemp: tem.AT.mx,

                        minPressure: tem.PRE.mn,
                        midPressure: tem.PRE.av,
                        maxPressure: tem.PRE.mx,
                    }
                })
                
                setSolDay1(temp[0]['number'])
                setSolDay2(temp[1]['number'])
                setSolday3(temp[2]['number'])

                setBigBoiTemp1(temp[0]['midTemp'].toFixed(0))
                setBigBoiTemp2(temp[1]['midTemp'].toFixed(0))
                setBigBoiTemp3(temp[2]['midTemp'].toFixed(0))

                setMinWind1(temp[0]['minWind'].toFixed(2))
                setMinWind2(temp[1]['minWind'].toFixed(2))
                setMinWind3(temp[2]['minWind'].toFixed(2))

                setMidWind1(temp[0]['midWind'].toFixed(2))
                setMidWind2(temp[1]['midWind'].toFixed(2))
                setMidWind3(temp[2]['midWind'].toFixed(2))

                setMaxWind1(temp[0]['maxWind'].toFixed(2))
                setMaxWind2(temp[1]['maxWind'].toFixed(2))
                setMaxWind3(temp[2]['maxWind'].toFixed(2))

                setMinTemp1(temp[0]['minTemp'].toFixed(1))
                setMinTemp2(temp[1]['minTemp'].toFixed(1))
                setMinTemp3(temp[2]['minTemp'].toFixed(1))

                setMidTemp1(temp[0]['midTemp'].toFixed(1))
                setMidTemp2(temp[1]['midTemp'].toFixed(1))
                setMidTemp3(temp[2]['midTemp'].toFixed(1))

                setMaxTemp1(temp[0]['maxTemp'].toFixed(1))
                setMaxTemp2(temp[1]['maxTemp'].toFixed(1))
                setMaxTemp3(temp[2]['maxTemp'].toFixed(1))

                setMinPressure1(temp[0]['minPressure'].toFixed(1))
                setMinPressure2(temp[1]['minPressure'].toFixed(1))
                setMinPressure3(temp[2]['minPressure'].toFixed(1))

                setMidPressure1(temp[0]['midPressure'].toFixed(1))
                setMidPressure2(temp[1]['midPressure'].toFixed(1))
                setMidPressure3(temp[2]['midPressure'].toFixed(1))

                setMaxPressure1(temp[0]['maxPressure'].toFixed(1))
                setMaxPressure2(temp[1]['maxPressure'].toFixed(1))
                setMaxPressure3(temp[2]['maxPressure'].toFixed(1))
            }) 

            .catch(err => {
                console.log(err)
            })
    }, [])
    //useEffect

    return ( 
            <div className="cont">

                {/* Left side */}
                
                <div className="left-content-looker">
                    <div className="top-content">

                        <div className="mars-weather-title-container">
                            <div className="mars-weather-title" >
                                <div ref={leftTitleRef}>Mars Weather</div>
                            </div>
                        </div>

                        <div className="c-or-f-container" ref={switchButtonRef}>
                            <div className="F" style={{color: farenheitColor}}>
                                &deg;F
                            </div>

                            <label className="switch" >
                                <input type="checkbox" onClick={handleCelFar}/>
                                <div className="slider round"></div>
                            </label>

                            <div className="C" style={{color: celciusColor}}>
                                &deg;C
                            </div>

                        </div>
                    </div>

                    <div className="bottom-content">
                        <div className="inside-bottom-content-div">
                            <div className="big-boi-temp-container" >
                                <div className="big-boi-temp" ref={bigBoi}>
                                    {
                                        (bigBoiTemp1Check) ? 
                                            (!check) ? ((bigBoiTemp1 - 32) * 5/9).toFixed() : bigBoiTemp1
                                            : (bigBoiTemp2Check) ? (!check) ? ((bigBoiTemp2 - 32) * 5/9).toFixed() : bigBoiTemp2 : 
                                            (bigBoiTemp3Check) ? (!check) ? ((bigBoiTemp3 - 32) * 5/9).toFixed() : bigBoiTemp3 : bigBoiTemp3
                                    }&deg;
                                </div>
                            </div>

                            <div className="sol-and-date-container" ref={nextToBigBoi}>
                                <div className="sol-day">Sol {
                                        (sol1Check) ? solDay1 : (sol2Check) ? solDay2 : solDay3
                                    }
                                </div>
                                <div className="earth-day">
                                    {
                                        (todayDateCheck) ? todayDate : (tomorrowDateCheck) ? tomorrowDate : twoDayDate
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Left side */}
                
                {/* Right side */}
                <div className="br"></div>
                    <div className="white-container" ref={sideNavRef}>
                        
                        {/* title container*/}
                        <div className="right-side-title-container">
                            <div className="right-side-title"
                                onClick={handleTodayClick}
                                style={{color: firstDayColor}}>
                                <div ref={rightDayOne}>Sol {solDay1}</div>
                            </div>

                            <div className="right-side-title"
                                onClick={handleTomorrowClick}
                                style={{color: secondDayColor}}>
                                <div ref={rightDayTwo}>Sol {solDay2}</div>
                            </div>

                            <div className="right-side-title"
                                onClick={handleTwoDayClick}
                                style={{color: thirdDayColor}}>
                                <div ref={rightDayThree}>Sol {solDay3}</div>
                            </div>
                        </div>
                        {/* title container*/}

                        {/* white line breaker */}
                        <div className="center-align">
                            <div className="white-line"></div>
                        </div>
                        {/* white line breaker */}

                        {/* inside data container*/}
                        <div className="rec-1-container">
                            <div className="rec-1">
                                
                                <div className="smaller-rec-1-content" >
                                    <div className="smaller-rec-left" >
                                        <div className="smaller-smaller-rec-left" >
                                            <div className="small-boi" ref={minWindRef}>Min Wind</div>
                                        </div>
                                    </div>
                                    <div className="smaller-rec-right" ref={refMinWind}>
                                        {
                                            (minWind1Check) ? minWind1 : (minWind2Check) ? minWind2 : minWind3
                                        } mps
                                    </div>
                                </div>

                                <div className="smaller-rec-1-content">
                                    <div className="smaller-rec-left" >
                                        <div className="smaller-smaller-rec-left">
                                            <div className="small-boi" ref={midWindRef}>Mid Wind</div>
                                        </div>
                                    </div>
                                    <div className="smaller-rec-right" ref={refMidWind}>
                                        {
                                            (midWind1Check) ? midWind1 : (midWind2Check) ? midWind2 : midWind3
                                        } mps
                                    </div>
                                </div>

                                <div className="smaller-rec-1-content">
                                    <div className="smaller-rec-left">
                                        <div className="smaller-smaller-rec-left">
                                            <div className="small-boi" ref={maxWindRef}>Max Wind</div>
                                        </div>
                                    </div>
                                    <div className="smaller-rec-right" ref={refMaxWind}>
                                        {
                                        (maxWind1Check) ? maxWind1 : (maxWind2Check) ? maxWind2 : maxWind3
                                        } mps 
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* inside data container*/}

                        {/* white line breaker*/}
                        <div className="center-align">
                            <div className="white-line"></div>
                        </div>
                        {/* white line breaker*/}

                        {/* inside data container*/}
                        <div className="rec-1-container">
                            <div className="rec-1">
                                
                                <div className="smaller-rec-1-content">
                                    <div className="smaller-rec-left">
                                        <div className="smaller-smaller-rec-left">
                                            <div className="small-boi" ref={minTempRef}>
                                            {
                                                (windowWidth <= 350) ? (minTempText) : (minTemperatureText)
                                            }</div>
                                        </div>
                                    </div>
                                    <div className="smaller-rec-right" ref={refMinTemp}>
                                        {
                                            (minTemp1Check) ? 
                                            (!check) ? ((minTemp1 - 32) * 5/9).toFixed(1) : minTemp1 
                                            : (minTemp2Check) ? (!check) ? ((minTemp2 - 32) * 5/9).toFixed(1) : minTemp2 : 
                                            (minTemp3Check) ? (!check) ? ((minTemp3 - 32) * 5/9).toFixed(1) : minTemp3 : minTemp3
                                        } &deg;{farenCel}
                                    </div>
                                </div>

                                <div className="smaller-rec-1-content">
                                    <div className="smaller-rec-left">
                                        <div className="smaller-smaller-rec-left">
                                            <div className="small-boi" ref={midTempRef}>
                                                {
                                                    (windowWidth <= 350) ? (midTempText) : (midTemperatureText)
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="smaller-rec-right" ref={refMidTemp}>
                                        { 
                                            (midTemp1Check) ? 
                                            (!check) ? ((midTemp1 - 32) * 5/9).toFixed(1) : midTemp1 
                                            : (midTemp2Check) ? (!check) ? ((midTemp2 - 32) * 5/9).toFixed(1) : midTemp2 : 
                                            (midTemp3Check) ? (!check) ? ((midTemp3 - 32) * 5/9).toFixed(1) : midTemp3 : midTemp3
                                        } &deg;{farenCel}
                                    </div>
                                </div>

                                <div className="smaller-rec-1-content">
                                    <div className="smaller-rec-left">
                                        <div className="smaller-smaller-rec-left">
                                            <div className="small-boi" ref={maxTempRef}>
                                                {
                                                    (windowWidth <= 350) ? (maxTempText) : (maxTemperatureText)
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="smaller-rec-right" ref={refMaxTemp}>
                                        { 
                                            (maxTemp1Check) ? 
                                            (!check) ? ((maxTemp1 - 32) * 5/9).toFixed(1) : maxTemp1 
                                            : (maxTemp2Check) ? (!check) ? ((maxTemp2 - 32) * 5/9).toFixed(1) : maxTemp2 : 
                                            (maxTemp3Check) ? (!check) ? ((maxTemp3 - 32) * 5/9).toFixed(1) : maxTemp3 : maxTemp3
                                        } &deg;{farenCel}
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* inside data container*/}

                        {/* white line breaker*/}
                        <div className="center-align">
                            <div className="white-line"></div>
                        </div>
                        {/* white line breaker*/}

                        {/* inside data container*/}
                        <div className="rec-1-container">
                            <div className="rec-1">
                                
                                <div className="smaller-rec-1-content">
                                    <div className="smaller-rec-left">
                                        <div className="smaller-smaller-rec-left">
                                            <div className="small-boi" ref={minPressureRef}>Min Pressure</div>
                                        </div>
                                    </div>
                                    <div className="smaller-rec-right" ref={refMinPressure}>
                                        {
                                            (minPressure1Check) ? minPressure1 : (minPressure2Check) ? minPressure2 : minPressure3
                                        } pa
                                    </div>
                                </div>

                                <div className="smaller-rec-1-content">
                                    <div className="smaller-rec-left">
                                        <div className="smaller-smaller-rec-left">
                                            <div className="small-boi" ref={midPressureRef}>Mid Pressure</div>
                                        </div>
                                    </div>
                                    <div className="smaller-rec-right" ref={refMidPressure}>
                                        {
                                            (midPressure1Check) ? midPressure1 : (midPressure2Check) ? midPressure2 : midPressure3
                                        } pa
                                    </div>
                                </div>

                                <div className="smaller-rec-1-content">
                                    <div className="smaller-rec-left">
                                        <div className="smaller-smaller-rec-left">
                                            <div className="small-boi" ref={maxPressureRef}>Max Pressure</div>
                                        </div>
                                    </div>
                                    <div className="smaller-rec-right" ref={refMaxPressure}>
                                        {
                                            (maxPressure1Check) ? maxPressure1 : (maxPressure2Check) ? maxPressure2 : maxPressure3
                                        } pa
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* inside data container*/}  
                    </div>
                {/* Right side */}
            </div>
    )
}


export default MarsWeatherApp
