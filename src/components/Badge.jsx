import React from "react";

const Badge = ({ link, children }) => (

    <li className="list-inline-item ">
        <a className="badge badge-dark font-weight-normal" href={link}>
            {children}
        </a>
    </li>

)

export default Badge;