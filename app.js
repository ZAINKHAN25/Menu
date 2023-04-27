// const tags = ["ALL", "BREAK FAST", "LUNCH","SHAKES","DINNER"];

var informations = [{
    name : "Buttermilk Pancakes",
    price : "$15.99",
    catergories : "breakfast",
    description : "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed    ",
    sourse : "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg"
},{
    name : "Diner Double",
    price : "$13.99",
    catergories : "lunch",
    description : "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
    sourse : "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-2.jpeg"
},{
    name : "Godzilla Milkshake",
    price : "$6.99",
    catergories : "shakes",
    description : "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
    sourse : "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-3.jpeg"
},{
    name : "Country Delight",
    price : "$20.99",
    catergories : "breakfast",
    description : "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
    sourse : "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg"
},{
    name : "Egg Attack",
    price : "$22.99",
    catergories : "lunch",
    description : "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
    sourse : "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-5.jpeg"
},{
    name : "Oreo Dream",
    price : "$18.99",
    catergories : "shakes",
    description : "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
    sourse : "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-6.jpeg"
},{
    name : "Bacon Overflow",
    price : "$8.99",
    catergories : "breakfast",
    description : "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
    sourse : "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-7.jpeg"
},{
    name : "American Classic",
    price : "$12.99",
    catergories : "lunch",
    description : "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
    sourse : "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-8.jpeg"
},{
    name : "Quarantine Buddy",
    price : "$16.99",
    catergories : "shakes",
    description : "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    sourse : "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-9.jpeg"
},{
    name : "Steak Dinner",
    price : "$39.99",
    catergories : "dinner",
    description : "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    sourse : "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-10.jpeg"
},
];

var description = document.querySelectorAll('.description')
var price = document.querySelectorAll('.price')
var name = document.querySelectorAll('.name')
var mainwworks = document.querySelectorAll('.mainwworks')

let informationList = document.getElementById("mainwork");

for (let i = 0; i < informations.length; i++) {
    let information = informations[i];
    let informationHTML = `
    
    <div style="display: flex;
    justify-content: center;
    margin-bottom: 2vh;">
    
    <img style="max-width: 200px;" src=${information.sourse} alt="" class="image">

    <!-- ye sirf image k ilawa hai jo text hai-->
    <div class="text">

        <!-- is me first line wala hai -->
        <div class="heandings">
            <div class="headingofwork">${information.name}</div>
            <div class="price">${information.price}</div>
        </div>

        <div class="description">
            ${information.description}
        </div>

    </div>
    </div>

    `;
    informationList.innerHTML += informationHTML;
};




var buttons = document.querySelectorAll('.buttons')
var separatedarrays = [];

for (let i = 0; i < informations.length; i++) {
    separatedarrays.push(informations[i].catergories);
}



buttons.forEach(function(button) {
  var arrayofbtn = '';
  separatedarrays.forEach(function(category) {
    if (!arrayofbtn.includes(category)) {
      arrayofbtn += `<input type="button" value="${category}" class="btn">`
    }
  });
  button.innerHTML = arrayofbtn;
});

var btn =  document.querySelectorAll('.btn');
// Add event listener to buttons
btn.forEach(function(button) {
    button.addEventListener("click", function() {
      // Get selected category
      var category = button.value.toLowerCase();
      
      // Filter items based on category
      var filteredItems = informations.filter(function(item) {
        return item.catergories === category;
      });
      
      // Update menu HTML content
      var informationList = document.getElementById("mainwork");
      informationList.innerHTML = "";
      
      for (let i = 0; i < filteredItems.length; i++) {
        let information = filteredItems[i];
        let informationHTML = `
        
        <div style="display: flex;
        justify-content: center;
        margin-bottom: 2vh;">
        
        <img style="max-width: 200px;" src=${information.sourse} alt="" class="image">
      
        <!-- ye sirf image k ilawa hai jo text hai-->
        <div class="text">
      
            <!-- is me first line wala hai -->
            <div class="heandings">
                <div class="headingofwork">${information.name}</div>
                <div class="price">${information.price}</div>
            </div>
      
            <div class="description">
                ${information.description}
            </div>
      
        </div>
        </div>
      
        `;
        informationList.innerHTML += informationHTML;
      }
    });
  });
  