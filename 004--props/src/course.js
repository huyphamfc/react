import React from "react";

function Course({
    courses =
    [{ title: 'None', instructor: 'None' }]
}) {
    return courses.map(
        ({ title, instructor }) => (
            <React.Fragment key={Math.random()}>
                <h2>{title}</h2>
                <p>{instructor}</p>
            </React.Fragment>)
    )
}

export default Course;