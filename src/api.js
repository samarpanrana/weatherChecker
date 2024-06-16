let values = { 
    
};

async function fetchData (searchValue) {
    let data = await fetch(`http://api.weatherapi.com/v1/current.json?key=1c54d7f0f34e4b22b03154217242301&q=${searchValue}&aqi=no`, {mode: 'cors'});
    let dataJson = await data.json();

    if (data.ok == true) {
        values.location = `${dataJson.location.name}, ${dataJson.location.country}`;
        values.degreeValue = dataJson.current.temp_c;
        values.description = dataJson.current.condition.text;
        values.descriptionIcon = dataJson.current.condition.icon;
        values.humidValue = dataJson.current.humidity;
        values.cloudValue = dataJson.current.cloud;
        values.heatIndexValue = dataJson.current.heatindex_c;
        values.windValue = dataJson.current.gust_mph;
    }
    else {
        values.location = "Oops! There is an ";
        values.degreeValue = '?';
        values.description = '?';
        values.humidValue = '?';
        values.cloudValue = '?';
        values.heatIndexValue = '?';
        values.windValue = '?';
    }
}

async function fetchImage (place) {
    let imageData = await fetch(`https://api.unsplash.com/photos/random?client_id=5I76_C4xT446tXeQE_XZAGXVT4UX32eQik4slMRDIJg&query=${place}`, {mode: 'cors'});
    let imageDataJson = await imageData.json();
    values.locationImageSource = (imageDataJson.urls.small);
}

export {fetchData, values, fetchImage}; 