// At least 10 possible products in the product list

/*
*
* List of Products that stores multiple values in the form of:
*{
*		name: "brocoli",
*		vegetarian: true,
*		glutenFree: true,
*       organic: true
*		price: 1.99
*	}
*   Name is of type STRING
*   Any dietary restrictions are of type BOOLEAN (ex. vegetarian, glutenFree)
*   Organic is of type BOOLEAN. A product can be organic or not organic
*   Price is of type FLOAT.
*/
var products = [
    {
        name: "Peanut Butter",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        price: 5.99
    },
    {
        name: "Brocoli",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 1.99
    },
    {
        name: "Milk",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 6.99
    },
    {
        name: "Bread",
        vegetarian: true,
        glutenFree: false,
        organic: false,
        price: 2.99
    },
    {
        name: "Sugar",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 0.99
    },
    {
        name: "Beef",
        vegetarian: false,
        glutenFree: true,
        organic: true,
        price: 7.99
    },
    {
        name: "Beyond Beef",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        price: 10.99
    },
    {
        name: "Apple",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 0.47
    },
    {
        name: "Cookies",
        vegetarian: true,
        glutenFree: false,
        organic: false,
        price: 3.49
    },
    {
        name: "Chicken",
        vegetarian: false,
        glutenFree: true,
        organic: false,
        price: 7.50
    },
    {
        name: "Specialty Spices",
        vegetarian: true,
        glutenFree: false,
        organic: true,
        price: 17.50
    },
    {
        name: "Lettuce",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 4.99
    }
];



/*
* This function will generate a list of available choices based on the clients restriction
* Parameters are a list of products and the restriction(s) to be applied for the selected user.
*
*/

function availChoices(productList,restriction, restriction2) {

    if(restriction == "GlutenFree"){
        restriction = "glutenFree";
    }
    else if(restriction == "Organic"){
        restriction ="organic";
    }

    else if(restriction == "Vegetarian"){
        restriction = "vegetarian";
    }
    if(restriction2 == "GlutenFree"){
        restriction2 = "glutenFree";
    }
    else if(restriction2 == "Organic"){
        restriction2 ="organic";
    }

    else if(restriction2 == "Vegetarian"){
        restriction2 = "vegetarian";
    }

    var productsWithRestriction;
    console.log("one", restriction=="None",restriction2);

    if((restriction!="None" && restriction!="") && (restriction2!="None" && restriction2!="")){
        console.log("five")
        productsWithRestriction = productList.filter(item => item[restriction]==true || item[restriction2]==true);
    }

    else if(restriction!="" || restriction!="None"){
        console.log("four")
        productsWithRestriction = productList.filter(item => item[restriction]==true);
    }

    else if(restriction2!="" || restriction2!="None"){
        console.log("three")
        productsWithRestriction = productList.filter(item => item[restriction2]==true);
    }

    else{
        console.log("here")
        productsWithRestriction = productList;
    }
    console.log("two",productsWithRestriction)
    return productsWithRestriction;

    

};



/*
* This function takes input of a list of selected items that were displayed to
* the user anc caluclates the total cost of all the items selected
*
*/
function getTotalPrice(selectedProducts) {
    totalPrice = 0;
    totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (selectedProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
};