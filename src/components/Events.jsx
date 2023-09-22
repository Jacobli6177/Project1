import React from "react";

const Event = (props) => {
    return (
        <td className= {'Event' + props.color}>
            <h1>{props.food}</h1>
        </td>
    )
}

export default Event;