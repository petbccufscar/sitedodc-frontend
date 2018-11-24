import React from "react";

const Badge = ({ link, children, color="dark" }) => (

    
    <li className="list-inline-item ">
        <a className={"badge badge-"+ color +" font-weight-normal"} href={link}>
            {children}
        </a>
    </li>

)

export default Badge;