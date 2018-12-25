/* eslint "jsx-a11y/no-access-key": 0 */

import React from "react";

const Badge = ({ id, link, children, color="dark", onClick, accessKey=''}) => (
    <li id={id} className="list-inline-item ">
        <a className={"badge badge-" + color + " font-weight-normal"} accessKey={accessKey} onClick={onClick} href={link}>
            {children}
        </a>
    </li>
)

export default Badge;