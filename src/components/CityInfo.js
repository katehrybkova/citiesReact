import React from 'react';
import Chart from "react-apexcharts";
import style from './CItyInfo.module.css';




const CityInfo = ({ citiesInfo }) => {
    const options = {
        labels: [],
    };
    const series = [];
    const seriesCostOfLiving = [];

    citiesInfo.map(el => {
        options.labels.push(el.year);
        series.push(el.population);
        seriesCostOfLiving.push(el["cost-of-living"]);
    });
    console.log(citiesInfo.citiesInfo)

    return <div className={style.cityInfoContainer}>
        <div className={style.chartContainer}>
        <h3>Population of city by year</h3>
            <Chart
                options={options}
                series={series}
                type="pie"
                width="600"
            />
        </div>
        <div className={style.chartContainer}>
        <h3>Cost of living ($)</h3>
            <Chart
                options={options}
                series={seriesCostOfLiving}
                type="pie"
                width="600"
            />
        </div>

    </div>
}
export default CityInfo;
