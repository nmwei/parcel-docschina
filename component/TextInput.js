/**
 * Created by nimengwei on 2018/3/12.
 */

import React, { Component } from 'react'

export default class TextInput extends Component {
    constructor(props, context){
        super(props, context);
    }

    componentDidMount(){
        console.log("input did mount");
    }

    render() {
        return(
            <input type="text"/>
        )
    }
}