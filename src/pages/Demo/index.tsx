import React from "react";
import classNames from "classnames";

import Button from '../../atoms/Button';
import Page from '../../templates/Page';

import styles from "./index.module.css";
import Counter from '../../organisms/Counter';

const Demo: React.FC = () => (
    <Page>
        <Counter/>
    </Page>
);

export default Demo;
