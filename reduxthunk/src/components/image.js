import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getImage } from './../actions'

export const Image = (props) => {

    useEffect(() => {
        props.getImage()
    }, [])

    return (
        <div>
            <img src={state.image} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        image: state.image
    }
}

export default connect(mapStateToProps, {})(Image)
