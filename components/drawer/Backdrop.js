import React from "react";

const BackDrop = (props) => {
    return <div className="backdrop" onClick={props.closeDrawer}></div>;
};

export default BackDrop;
