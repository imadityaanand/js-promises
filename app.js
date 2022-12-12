// create a function and following the progressions inside the function.

// Progression 1: Create a promise call which fetches data

function populateData() {
  const gridElement = document.getElementById('message');
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      const result = res.data;

      result.forEach(function (contact) {
        const contactElement = document.createElement('div');
        const nameElement = document.createElement('div');
        const emailElement = document.createElement('div');
        const cityElement = document.createElement('div');
        const phoneElement = document.createElement('div');
        const companyElement = document.createElement('div');

        // Progression 2: Display the fetched data in the form of list
        nameElement.innerText = contact.name;
        emailElement.innerText = contact.email;
        cityElement.innerText = contact.address.city;
        phoneElement.innerText = contact.phone;
        companyElement.innerText = contact.city;

        contactElement.append(nameElement);
        contactElement.append(emailElement);
        contactElement.append(cityElement);
        contactElement.append(phoneElement);
        contactElement.append(companyElement);

        contactElement.classList.add('player');

        gridElement.append(contactElement);
      });
    })

    // Progression 3: When the promise call is rejected then throw an error
    .catch((err) => {
      console.log(err);
    });
}
