
import React, { Component } from 'react'
import ajaxloader from './ajax-loader.gif'

export default class Spinner extends Component {
    render() {
        return (
            <div className="text-center">
                <img src={ajaxloader} alt="" />
            </div>
        )
    }
}
