import React, {useEffect} from 'react';



let ApiCall = ()=>{


    useEffect(()=>{
        async function CovidData(){
            let CovidFetch = await fetch("https://api.thevirustracker.com/free-api?global=stats");
            let Results = await CovidFetch.json();
            console.log(Results);
        }
        CovidData();
    }, []);

    
    
    return(

        <h1>Api Call</h1>
    );
}

export default ApiCall;

