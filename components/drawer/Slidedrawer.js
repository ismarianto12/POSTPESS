import React from "react";

const SlideDrawer = ({ show, content }) => {
    let drawerClasses = show ? "side-drawer open" : "side-drawer";

    return (
        <div className={drawerClasses} style={{
            'padding-left': '10px'
        }}>
            {content}
        </div>
    );
};

export default SlideDrawer;
