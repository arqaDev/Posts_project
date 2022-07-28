import React from "react";
import classes from './MyButton.module.css'
import { useState } from "react";


const MyButton = ({children, ...props}) => {
    const [isHovering, setIsHovering] = useState(false)

    return (
        <button {...props} onMouseEnter={() => setIsHovering(true)}
                           onMouseLeave={() => setIsHovering(false)}
                           className={isHovering ? `${classes.myBtn} ${classes.hover}` : classes.myBtn}>
            {children}
        </button>
    )
}

export default MyButton