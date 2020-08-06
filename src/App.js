import React from 'react';
import Cards from './Components/Cards/Cards';
import Chart from './Components/Chart/Chart';
import CountryPicker from './Components/CountryPicker/CountryPicker';
import styles from './App.module.css';

import {fetchData} from './api';
// Try for one import statement



class App extends React.Component{
state={
    data:{},
    country:'',
}

    async componentDidMount(){

        const fetchedData=await fetchData();
        //console.log(data);
        this.setState({data:fetchedData});


    }

handleCountryChange= async(country)=>{
    // fetch the data
    //set the data
    const fetchedData=await fetchData(country);
    this.setState({data:fetchedData,country:country});


   // console.log(country);
}

    render(){
        // eslint-disable-next-line

        const {data,country}=this.state;
        return (
            <div className={styles.container}>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country} />
                
            </div>
        )
    }
}
export default App;
