import React, { Component } from 'react';
import CityInfo from './CityInfo';
import style from './FilterInput.module.css';
import axios from 'axios'



export default class FilterInput extends Component {
    state = {
        showingInfo: false,
        citiesList: [],
        citiesInfo: [],
    }

    getCityNames() {
        axios.get('https://katehrybkova.github.io/CItiesFilter/src/analytics/fixtures/cities.json')
            .then((data) => { this.setState({ citiesList: data.data }) ;
        }
          );
    }

    getCityInfo=(e)=> {
        let cityName = e.target.value;
        axios.get(`https://katehrybkova.github.io/CItiesFilter/src/analytics/fixtures/data/${cityName.toLowerCase()}.json`)
        .then((data) => 
           { this.setState({ citiesInfo: data.data , showingInfo: true});
        console.log(data.data)}
        )
    }
    
    render() {
        const { showingInfo, citiesList, citiesInfo } = this.state;

        this.getCityNames()
        return (
            <div className={style.filterContainer}>
                <form>
                    <input onChange={this.getCityInfo} className={style.inputStyle} type="text" id="txtAutoComplete" list="languageList" placeholder="Type for showing cities..." />
                    <datalist id="languageList">
                        {citiesList.map(el => <option key={el.city} value={el.city} />)}
                    </datalist>
                </form>

                {showingInfo && <CityInfo citiesInfo={citiesInfo} />}
            </div>
        );
    }
}