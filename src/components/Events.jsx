import React from "react";

const Event = (props) => {
    return (
        <td className= {'Event' + props.color}>
            <h1 className="eventname">{props.food}</h1>
            <h6>{props.image}</h6>
        </td>
    )
}

export default Event;