import React, { Component } from 'react';

import styles from './Home.css';

import Icon from './../../assets/images/logo.png';
import Header from '../../components/Header';


const Home  = ()=>{
    return(
        <>
            <Header>

            </Header>
        </>
    )
}

export default Home















// export class Home extends Component {
    //     render() {
    //         return (
    //             <div className={styles.container}>
    //                 <div className={styles.header}>
    //                     <img src={Icon} />
    //                     <h1 className={styles.title}>Forecaster</h1>
    //                     <p>
    //                         Forecaster is your friendly neighbourhood weather application. 
    //                         It gives you a near-accurate forecast for your current city.
    //                     </p>
    //                 </div>
    //                 <div className={styles.instructions}>
    //                     <h2>Instructions</h2>
    //                     <p>
    //                         This is a boilerplate template to help you start coding with 
    //                         your application straightaway.
    //                     </p>
    //                     <ul>
    //                         <li>
    //                             Candidates are expected to implement Redux and store.
    //                         </li>
    //                         <li>
    //                             Routing has also been enabled in this template, but the candidate  
    //                             is expected to implement the routes on their own.
    //                         </li>
    //                         <li>
    //                             Candidates are free to use CSS, SASS, SCSS or LESS for styling.
    //                         </li>
    //                         <li>
    //                             Candidates need to use the APIs provided by  <a href="https://openweathermap.org/api">OpenWeather Server</a>.
    //                         </li>
    //                     </ul>
    //                 </div>
    //             </div>
    //         )
    //     }
    // }

