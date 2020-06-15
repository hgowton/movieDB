import React from "react";

export function Container({ fluid, children}) {
    return <div className={`container${fluid ? "-fluid" : ""}`}>
        {children}
    </div>;
}

export function Row({fluid, children}) {
    return <div className={`row${fluid ? "-fluid" : ""}`}>
        {children}
    </div>;
}

//Less Syntax
//<Col size="md-12"> instead of <div className="col-md-12">
export function Col({ size, children}) {
    return (
    <div className={size
    .split(" ")
    .map(size => "col-" + size)
    .join(" ")}>
        {children}
    </div>
    );
}


