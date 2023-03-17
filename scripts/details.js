
fetch('https://mindhub-xj03.onrender.com/api/amazing')
.then(response=>response.json())
.then(data=>{
    const queryString = location.search;

    const params = new URLSearchParams(queryString);
    
    const id = params.get("id");
    
    let evento = "";
    
    const evento2 = data.events.forEach((event)=>{
        if(event._id == id){
            evento = event;
        }
    }) 
    
    const $section = document.querySelector("section");
    
    $section.innerHTML = `
        <div class="details-title col-md-12 col-lg-6 ">
            <img src="${evento.image}" alt="${evento.name}">
        </div>
        
        <div class="details-items col-md-12 col-lg-6 ">
            <div>
                <button id="back-link" class="view-events">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l14 0"></path>
                    <path d="M5 12l4 4"></path>
                    <path d="M5 12l4 -4"></path>
                </svg>
                 Go Back
             </button>
            </div>
            <div class="details-name">
                <h1 class="">${evento.name}</h1>
                <h6>${evento.description}</h6>
            </div>
            <div>
                <img src="https://img.freepik.com/vector-gratis/ilustracion-concepto-selector-fecha_114360-4495.jpg?w=826&t=st=1678450812~exp=1678451412~hmac=ea3163cc7561e054ea66ad3fa4fd58c8c0200fed917538df1e0b117c0d6fbd3a">
                <h3>Date</h3>
                <h6>${evento.date}</h6>
            </div>
            <div>
                <img src="https://img.freepik.com/free-vector/personal-files-concept-illustration_114360-4049.jpg?w=826&t=st=1678407019~exp=1678407619~hmac=75d63921ee55edf14941efc5090a9eebba8b4919974982bb62188cc64603c4c0">
                <h3>Category</h3>
                <h6>${evento.category}</h6>
            </div>
            <div>
                <img src="https://img.freepik.com/free-vector/navigation-concept-illustration_114360-956.jpg?w=826&t=st=1678407151~exp=1678407751~hmac=71030ff9dcca76dfb9928795ddc60cdbd0680f5e79f8437f1a94704c63caeb08">
                <h3>Place</h3>
                <h6>${evento.place} </h6>
            </div>
            <div>
                <img src="https://img.freepik.com/free-vector/battery-runtime-abstract-concept-illustration_335657-3774.jpg?w=826&t=st=1678409769~exp=1678410369~hmac=99295a5e67cd19516a83d731dda53e6268ce8c6555f121c9f1e73d487eecfd84">
                <h3>Capacity</h3>
                <h6>${evento.capacity}</h6>
            </div>
            <div>
                <img src="https://img.freepik.com/free-vector/profitable-pricing-strategy-price-formation-promo-action-clearance-shopping-idea-design-element-cheap-products-advertisement-customers-attraction_335657-1627.jpg?w=826&t=st=1678407322~exp=1678407922~hmac=f241efcd593c6a2907c68848d8a3dc83c845a88924c84ffd935e3dc777544441">
                <h3>Price</h3>
                <h6>$${evento.price}</h6>
            </div>
            <div>
                <img src="https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg?w=826&t=st=1678407350~exp=1678407950~hmac=5cceec9e17b187649aeca9d0d89fb5acdcd4b19eed19da878cc2384548f8625f">
                <h3>Assistance</h3>
                <h6>${evento.assistance}</h6>
            </div>
        </div>
    `;

    const backLink = document.querySelector("#back-link")
    backLink.addEventListener('click',()=>{
    window.history.go(-1);
    })
})
.catch(error=>console.log(error))




