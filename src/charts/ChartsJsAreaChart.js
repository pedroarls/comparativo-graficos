import React from 'react';
import styles from "./styles";

import { Line } from 'react-chartjs-2';
import { chartjsData } from '../util';

const data = chartjsData();

export const ChartJSAreaChart = () => (
    <div style={styles.container}>
        <h3 style={styles.title}>ChartJS Area Chart</h3>
        <Line data={data} />
    </div>
);

