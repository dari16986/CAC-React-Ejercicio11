/*
import React from "react";

export default function Movies(props) {

    const myList = props.data.map( (element) => {
        return (<h2> {element} </h2>)
    });

    return ( <> { myList } </> );
}
*/

import React from "react";

export default function Characters(props) {

    const myList = props.data.map( (element) => {
        return (<img src={element.image} alt="Simpson Character"/>)
    });

    return ( <> { myList } </> );
}
