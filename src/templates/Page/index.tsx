import React, {PropsWithChildren} from "react";
import classNames from "classnames";

import styles from "./index.module.css";

type PageProps = PropsWithChildren<{
    className?: string
}>

const Page: React.FC<PageProps> = ({ className, children }) => (
    <div className={ classNames(styles.container, className) }>
        <main>
            { children }
        </main>
    </div>
);

export default Page;
