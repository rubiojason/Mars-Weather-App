import React from 'react'
import { buyCookie, setTemp } from '../redux'
import { connect } from 'react-redux'

function CookieContainer(props) {
    return (
        <div>
            <div>
                <h2>Number of Cookies - {props.numOfCookies}</h2>
                <button onClick={props.buyCookie}>Buy Cookie</button>
            </div>
            <div>
                <h2>{props.temp}</h2>
                <button onClick={props.setTemp}>Add 50</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCookies: state.cookie.numOfCookies,
        temp: state.cookie.temp,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCookie: () => dispatch(buyCookie()),
        setTemp: () => dispatch(setTemp())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CookieContainer)
