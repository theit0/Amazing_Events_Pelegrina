const { createApp } = Vue
createApp({
    data(){
        return {
            APIurl: 'https://mindhub-xj03.onrender.com/api/amazing',
            categories : [],
            events: [],
            pastEvents : [],
            upcomingEvents : [],
            backupEvents:[],
            backupPastEvents:[],
            backupUpcomingEvents:[],
            inputText:'',
            checkedCats :[],
            favorites : [],
            show : false,
            addedText : 'Add to favorites',
            loading: true
        }
    },
    created(){
        this.getData();
        this.favorites = JSON.parse(localStorage.getItem('favs')) || [];
    },
    methods:{
        getData(){
            fetch(this.APIurl)
                .then(res=>res.json())
                .then(data=>{
                    this.categories = [...new Set(data.events.map(event => event.category))]
                    this.events = data.events
                    this.backupEvents = this.events;
                    this.upcomingEvents = this.events.filter(event =>{
                        return new Date(event.date) > new Date(data.currentDate)
                    })
                    this.pastEvents = this.events.filter(event =>{ 
                        return new Date(event.date) < new Date(data.currentDate)
                    })
                    this.backupPastEvents = this.pastEvents;
                    this.backupUpcomingEvents = this.upcomingEvents;
                    this.loading = false;
                })
        },
        addFavorite($event,event){
            if(!this.favorites.find(fav => fav.name === event.name)){
                this.favorites.push(event);
                localStorage.setItem('favs',JSON.stringify(this.favorites))
                $event.target.textContent = 'Perfect!'
                $event.target.classList.add('clicked')
                setInterval(() => {
                    $event.target.textContent = 'Add to favs'
                    $event.target.classList.remove('clicked')  
                }, 1000);
            } else {
                $event.target.classList.add('terremoto');
                setTimeout(() => {
                    $event.target.classList.remove('terremoto');
                }, 1000);
            }
        },
        deleteFavorite(eventParam){
            this.favorites = this.favorites.filter((event)=>event.name!=eventParam.name);
            localStorage.setItem('favs',JSON.stringify(this.favorites))
        },
        showFavorites(){
            this.show = !this.show
        },
        showCategories(){
            const categories = document.querySelector(".categories");
            categories.classList.toggle('show-categories')
        }
    },
    
    computed:{
        // Reactivo
        filterEvents(){
            let filterByText = this.backupEvents.filter(event =>event.name.toLowerCase().includes(this.inputText.toLowerCase()))
            if(!this.checkedCats.length){
                this.events= filterByText;
            } else {
                this.events = filterByText.filter(event =>this.checkedCats.includes(event.category))
            }
        },
        filterPastEvents(){
            let filterByText = this.backupPastEvents.filter(event =>event.name.toLowerCase().includes(this.inputText.toLowerCase()))
            if(!this.checkedCats.length){
                this.pastEvents= filterByText;
            } else {
                this.pastEvents = filterByText.filter(event =>this.checkedCats.includes(event.category))
            }
        },
        filterUpcomingEvents(){
            let filterByText = this.backupUpcomingEvents.filter(event =>event.name.toLowerCase().includes(this.inputText.toLowerCase()))
            if(!this.checkedCats.length){
                this.upcomingEvents= filterByText;
            } else {
                this.upcomingEvents = filterByText.filter(event =>this.checkedCats.includes(event.category))
            }
        },
    }
    
}).mount('#app');
