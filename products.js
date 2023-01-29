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
        price: 4.99
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
        price: 7.51
    }
];



/*
* This function will generate a list of available choices based on the clients restriction
* Parameters are a list of products and the restriction(s) to be applied for the selected user.
*
*/

function availChoices(productList, restriction, restriction2) {
    let product_names = [];
    for (let i = 0; i < productList.length; i += 1) {
        if(restriction == restriction2){
            if ((restriction=="Vegetarian") && (productList[i].vegetarian == true)){
                product_names.push(productList[i]);
            }
            else if ((restriction=="GlutenFree") && (productList[i].glutenFree == true)){
                product_names.push(productList[i]);
            }
            else if ((restriction=="Organic") && (productList[i].organic == true)){
                product_names.push(productList[i]);
            }
            else if (restriction=="None"){
                product_names.push(productList[i]);
            }
        }
        else if ((restriction == "Vegetarian" && restriction2 == "" || restriction == "Vegetarian" && restriction2 == "None" || restriction == "" && restriction2 == "Vegetarian" || restriction == "None" && restriction2 == "Vegetarian") && (productList[i].vegetarian == true)) {
            product_names.push(productList[i]);
        }
        else if ((restriction == "GlutenFree" && restriction2 == "" || restriction == "GlutenFree" && restriction2 == "None" || restriction == "" && restriction2 == "GlutenFree" || restriction == "None" && restriction2 == "GlutenFree") && (productList[i].glutenFree == true)) {
            product_names.push(productList[i]);
        }
        else if ((restriction == "Organic" && restriction2 == "" || restriction == "Organic" && restriction2 == "None" || restriction == "" && restriction2 == "Organic" || restriction == "None" && restriction2 == "Organic") && (productList[i].organic == true)) {
            product_names.push(productList[i]);
        }
        else if ((restriction == "None" && restriction2 == "") || (restriction == "" && restriction2 == "None")){
            product_names.push(productList[i]);
        }
        else if ((restriction == "GlutenFree" && restriction2 == "Vegetarian" || restriction == "Vegetarian" && restriction2 == "GlutenFree") && (productList[i].glutenFree == true && productList[i].vegetarian == true)) {
            product_names.push(productList[i]);
        }
        else if ((restriction == "GlutenFree" && restriction2 == "Organic" || restriction == "Organic" && restriction2 == "GlutenFree") && (productList[i].glutenFree == true && productList[i].organic == true)) {
            product_names.push(productList[i]);
        }
        else if ((restriction == "Organic" && restriction2 == "Vegetarian" || restriction == "Vegetarian" && restriction2 == "Organic") && (productList[i].organic == true && productList[i].vegetarian == true)) {
            product_names.push(productList[i]);
        }
        
        
    }
    return product_names;

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