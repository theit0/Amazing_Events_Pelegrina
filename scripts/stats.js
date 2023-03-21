pullData().then(data=>{
    //Obtener fecha actual
    let currentDate = new Date(data.currentDate);

    //Obtener past events
    const pastEvents = data.events.filter((event)=>{
        return (new Date(event.date)) < currentDate;
    });
    
    //Obtener upcoming events
    const upcomingEvents = data.events.filter((event)=>{
        return (new Date(event.date)) > currentDate;
    });

    //Obteniendo los maximos y minimos porcentajes de los eventos pasados
    let maxAssistance = {
        percentage: 0
    };
    let minAssistance = {
        percentage: 100
    };
    for (let i = 0; i < pastEvents.length; i++) {
        const event = pastEvents[i];
        const percentage = event.assistance / event.capacity * 100;
        if (percentage > maxAssistance.percentage) {
            maxAssistance = {
                percentage,
                event
            };
        } else if (percentage < minAssistance.percentage) {
            minAssistance = {
              percentage,
              event
            };
        }
    } 

    //Evento pasado con la mayor capacidad
    const eventWithLargerCapacity = pastEvents.reduce((prev, curr) => {
        return (curr.capacity > prev.capacity) 
                ? curr 
                : prev;
    })

    //Obtengo el arreglo de categorias
    const categoriesPast = [...new Set(pastEvents.map(event => event.category))];
    const categoriesUpcoming = [...new Set(upcomingEvents.map(event => event.category))];

    // Crear y agregar las filas de categorias (tuve que hacer dos constantes por el fallo de la API
    // la cual tiene distintos atributos, pero si no hubiera usado una sola funcion y usarla para past y upcoming)
    const pastTableRows = categoriesPast.map(category => {
        const eventsInCategory = pastEvents.filter(event => event.category === category);
        const totalRevenue = eventsInCategory.reduce((total, event) => total + event.price * event.assistance, 0);
        const averageAttendance = eventsInCategory.reduce((total, event) => total + event.assistance / event.capacity, 0) / eventsInCategory.length * 100;
        
        return `
            <tr>
            <td>${category}</td>
            <td>$${totalRevenue}</td>
            <td>${averageAttendance.toFixed(2)}%</td>
            </tr>
        `;
    });
    const upcomingTableRows = categoriesUpcoming.map(category => {
        const eventsInCategory = upcomingEvents.filter(event => event.category === category);
        const totalRevenue = eventsInCategory.reduce((total, event) => total + event.price * event.estimate, 0);
        const averageAttendance = eventsInCategory.reduce((total, event) => total + event.estimate / event.capacity, 0) / eventsInCategory.length * 100;
      
        return `
          <tr>
            <td>${category}</td>
            <td>$${totalRevenue}</td>
            <td>${averageAttendance.toFixed(2)}%</td>
          </tr>
        `;
    });
   

    $table.innerHTML = `
        <tr>
            <th colspan="3">Events statistics</th>
        </tr>
        <tr style="font-weight:bold;">
            <td>Event with the highest percentaje of attendance</td>
            <td>Event with the lowest percentaje of attendance</td>
            <td>Event with larger capacity</td>
        </tr>
        <tr>
            <td>${
                maxAssistance.event.name +" "+"("
                +maxAssistance.percentage.toFixed(2)+"%"+")"
            }
            </td>
            <td>${
                minAssistance.event.name+" "+"("
                +minAssistance.percentage.toFixed(2)+"%"+")"
            }
            </td>
            <td>${
                eventWithLargerCapacity.name+" "+"("
                +eventWithLargerCapacity.capacity+")"
            }
            </td>
        </tr>
        <tr>
            <th colspan="3">Upcoming events statistics by category</th>
        </tr>
        <tr style="font-weight:bold;">
            <td>Categories</td>
            <td>Revenues</td>
            <td>Percentaje of attendance</td>
        </tr>
        ${upcomingTableRows.join('')}
        <tr>
            <th colspan="3">Past events statistic by category</th>
        </tr>
        <tr style="font-weight:bold;">
            <td>Categories</td>
            <td>Revenues</td>
            <td>Percentaje of attendance</td>
        </tr>
        ${pastTableRows.join('')}
    `
})


