let API = "https://mindhub-xj03.onrender.com/api/amazing";

// async-await version
async function pullData(){
    try {
        const response = await fetch(API)
        const data = await response.json();
        window.APIdata = data;
        return data;
    } catch (error) {
        console.log(error)
    }
}
pullData(); 
 
/* function pullData(){
    return fetch(API)
    .then(response => response.json())
    .then(data => {
        window.APIdata = data;
        return data;
    })
    .catch(error => {
        console.error('Ha ocurrido un error', error);
    });    
}
pullData();  */