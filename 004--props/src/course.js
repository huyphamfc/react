import React from "react";

function Course({
    title = 'None',
    instructor = 'None'
}) {
    return (
        <React.Fragment>
            <h2>{title}</h2>
            <p>{instructor}</p>
        </React.Fragment>
    )
}

export default Course;