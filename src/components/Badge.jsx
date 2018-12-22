import React from "react";

const Badge = ({ id, link, children, color="dark", onClick}) => (
    <li id={id} className="list-inline-item ">
        <a className={"badge badge-" + color + " font-weight-normal"} onClick={onClick} href={link}>
            {children}
        </a>
    </li>
)

export default Badge;