#Advanced jQuery Coding Exercise#

This repo is a shopping cart for a online shopping site exercise I did to show my understanding and abilities with using jQuery. The Site in this repo had to meet the following requirements set out before the the site was started. The following site was made in about 7 hours and meets all the requirements   


##Exercise Considerations##
 The mark-up needed to be W3C compliant and validate against the online W3C checker. The mark-up also had to takes into account basic accessibility standards.  It considers page weight when using images so it uses sprites. The page also needed to account for different screens sizes, 

###Browser Support:
 The page functions and resemble the comp in the following web browsers:
- Firefox (latest)
- Google Chrome (latest)
- Safari (latest)
- Internet Explorer 9+
The page functions but does on look the same in Internet Explorer 7 and 8

###Functionality Requirements 
The pages cart needed to  have three items in basket and each product must have its name, price, quantity with controls and product total cost. Beneath the product list, there must be the cart total and below that total tax  owed for sales tax of  20% and the total cost of the order after sales tax is added. Finally, a ‘Buy Now’ button allows the user to go ahead and purchase the items shown at the total price given.

The fonts shown in the comp are Droid Sans and Droid Serif, from http://www.google.com/fonts.

**The ‘Your Basket’ page should implement  the following functional behavior:**

- The quantity field shown beside each product should be pre-filled with the initial quantities. Selecting the + button beside the field should increment the quantity by 1. Selecting the – button should decrement the quantity by 1. The user should also be free to enter any positive number within the quantity field, where only whole numbers from 1 to 10 should be permitted for each product. Note: If necessary, the visual layout of the quantity field may differ from the creative if enforced so by the browser, though recall that the page must function correctly down to Internet Explorer 7. 
- Whenever a quantity is changed beside any product, the cost beside should update to reflect the price of that product multiplied by its quantity. The sub-total beneath the product list should update to reflect the sum of all the costs. The VAT cost should also update whenever the sub-total changes, as should the final total cost, which is the sum of the sub-total and the VAT. 
- When selected, the delete button, indicated as a trashcan icon, should remove the item beside it entirely from the basket even if it would result in no products remaining in the basket. The totals beneath the product list should be updated accordingly whenever a product is deleted. If no products remain in the basket, the ‘Buy Now’ button should be disabled. 
- When there and products in the basket and the ‘Buy Now’ button is selected, it should take the product data together with the quantities, costs and totals, and simulate how you would POST this data in JSON format to an Ajax-supported web service URL. As this is purely for simulation purposes in this exercise, you may use a blank URL for this. Display an alert message on screen once the Ajax call is complete.