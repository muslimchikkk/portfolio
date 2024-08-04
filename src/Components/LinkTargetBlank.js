import React from "react";

const LinkTargetBlank = ({ children, href }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
)

export default LinkTargetBlank;
