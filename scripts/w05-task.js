/* W05: Programming Tasks */

let d = new Date()
let today = d.getDate()
let message = today == 0 || today > 5 ? 'WooHoo! Its the weekend!' : 'Hang in there!'

/* Declare and initialize global variables */
const templesElement = document.getElementById("templesElement");
const templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    // Clear existing temple cards
    reset();

    temples.forEach((temple) => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        const img = document.createElement("img");

        h3.textContent = temple.templeName;
        img.src = temple.imageUrl;
        img.alt = temple.location;

        article.appendChild(h3);
        article.appendChild(img);

        templesElement.appendChild(article);
    });
};


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        const data = await response.json();

        // Assign temple data to the global variable
        templeList.push(...data);

        // Display temples
        displayTemples(templeList);
    } catch (error) {
        console.error("Error fetching temple data:", error);
    }
};

// Function: reset
const reset = () => {
    templesElement.innerHTML = ""; // Clear all temple cards
};

/* reset Function */
const filterTemples = (temples) => {
    reset(); // Clear existing temple cards

    const filter = document.getElementById("filtered").value;

    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "nonutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicationDate) < new Date(1950, 0, 1)));
            break;
        case "all":
        default:
            displayTemples(temples);
            break;
    }
};

/* filterTemples Function */


getTemples();

/* Event Listener */
document.getElementById("filtered").addEventListener("change", () => {
    filterTemples(templeList);
});
