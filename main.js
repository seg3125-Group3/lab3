
//This function will modify the page contents based on the tab selected at the top of the page
function tabChange(e, tabName) {
    pageContent = document.getElementsByClassName("pageContent")

    for (i = 0; i < pageContent.length; i++) {
        pageContent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    navOpt = document.getElementsByClassName("navOpt");
    for (i = 0; i < navOpt.length; i++) {
        navOpt[i].className = navOpt[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    e.currentTarget.className += " active";
}

//Function that will populate the page for the user to select what to purchase
function availProductChoices(slct1, slct2,slct3) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
    var s3 = document.getElementById(slct3)

    // s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";

    // obtain a reduced list of products based on restrictions
    var optionArray = availChoices(products, s1.value, s3.value);

    //SORT THE ARRAY PRICE LOW TO HIGH FROM HERE ON OPTIONARRAY
    for (let i = 0; i < optionArray.length; i++) {

        //Inner pass
        for (let j = 0; j < optionArray.length - i - 1; j++) {

            //Value comparison using ascending order

            if (products[j + 1].price < products[j].price) {

                //Swapping
                [products[j + 1], products[j]] = [products[j], products[j + 1]]
            }
        }
    }


    // for each item in the array, create a checkbox element, each containing information such as:
    // <input type="checkbox" name="product" value="Bread">
    // <label for="Bread">Bread/label><br>

    for (i = 0; i < optionArray.length; i++) {

        var productName = optionArray[i];
        // create the checkbox and add in HTML DOM
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "product";
        checkbox.value = productName;
        s2.appendChild(checkbox);

        // create a label for the checkbox, and also add in HTML DOM
        var label = document.createElement('label')
        label.htmlFor = productName;
        label.appendChild(document.createTextNode(productName + " - Price: $" + products[i].price));
        s2.appendChild(label);

        // create a breakline node and add in HTML DOM
        s2.appendChild(document.createElement("br"));
    }

}

// Function that generates a text of all selected items that were shown to the user 
// this function will then insert the paragragh of items and total cost on the appropriate page
function selectedItems() {
    var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));
  
}
