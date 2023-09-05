import React from "react";
import classNames from "classnames";

import styles from "./index.module.css";

const Button: React.FC<React.JSX.IntrinsicElements["button"]> = ({
   children,
   className,
   disabled = false,
   ...props
}) => (
    <button
        className={ classNames(styles.container, className) }
        disabled={ disabled }
        { ...props }
    >
        { children }
    </button>
);

export default Button;
