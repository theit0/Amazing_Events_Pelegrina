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
        <div class="details-container">
            <div class="details-title">
                <img src="${evento.image}" alt="${evento.name}">
            </div>
            
            <div class="details-items col-md-12 col-lg-6 ">
                <div class="d-flex justify-content-center flex-column align-items-center">
                    <button id="back-link" class="view-events">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l14 0"></path>
                            <path d="M5 12l4 4"></path>
                            <path d="M5 12l4 -4"></path>
                        </svg>
                        Go Back
                    </button>
                    <div class="details-name pt-2">
                        <h4>${evento.name}</h4>
                        <p>${evento.description}</p>
                    </div>
                </div>
                <div class="details-data">
                    <div>
                        <h5>Date📅</h5>
                        <p>${evento.date}</p>
                    </div>
                    <div>
                        <h5>Category🎯</h5>
                        <p>${evento.category}</p>
                    </div>
                    <div>
                        <h5>Place📍</h5>
                        <p>${evento.place} </p>
                    </div>
                    <div>
                        <h5>Capacity🧑‍🤝‍🧑</h5>
                        <p>${evento.capacity}</p>
                    </div>
                    <div>
                        <h5>Price💲</h5>
                        <p>$${evento.price}</p>
                    </div>
                    <div>
                        <h5>Assistance👥</h5>
                        <p>${evento.assistance}</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    const backLink = document.querySelector("#back-link")
    backLink.addEventListener('click',()=>{
    window.history.go(-1);
    })
})
.catch(error=>console.log(error))




