import React, {useState} from "react";
import classNames from "classnames";

import Button from '../../atoms/Button';

import styles from "./index.module.css";

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <div className={ styles.container }>
            { count }
            <div className={ styles.actions }>
                <Button
                    className={ styles.button }
                    disabled={ count < 1 }
                    onClick={ () => setCount(count - 1) }
                >
                    -
                </Button>
                <Button
                    className={ styles.button }
                    onClick={ () => setCount(count + 1) }
                >
                    +
                </Button>
            </div>
        </div>
    );
}

export default Counter;
