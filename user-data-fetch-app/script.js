async function fetchUsers() {
    const container = document.getElementById('user-container');

    const myFriends = [
        "Ado Feliciano", "Fransjoven Chua", "Kyrbi Delos Santos", 
        "Fernan Olita", "Daniella Naorbe", "Danica Naorbe", 
        "Jaypee Aguilon", "Prince Zuko Ghaga", "Claire Baquillö", "Dwight Francis Naorbe"
    ];

    const phCities = [
        "Davao City", "Quezon City", "Cebu City", "Manila", "Zamboanga City",
        "Taguig", "Pasig", "Cagayan de Oro", "Iloilo City", "Bacoor"
    ];

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) throw new Error("Connection Error");

        const data = await response.json();

        container.innerHTML = '';

        myFriends.forEach((friend, index) => {
            const card = document.createElement('div');
            card.className = 'user-card';

            const email = `${friend.toLowerCase().replace(/\s/g, '')}@email.com`;
            const city = phCities[index];

            card.innerHTML = `
                <h3>${friend}</h3>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Location:</strong> <span class="city-tag">${city}</span></p>
            `;
            container.appendChild(card);
        });

    } catch (error) {
        console.error("Oops:", error);
        container.innerHTML = `<p style="color:red">Failed to load barkada data.</p>`;
    }
}


fetchUsers();