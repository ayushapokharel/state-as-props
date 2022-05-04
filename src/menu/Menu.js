import MenuItem from '../menu-item/MenuItem';
import './Menu.css';

import {useState} from 'react';

function Menu ({startingItems}) {
    //Setting the value of the "startingItems' props (aka the 'menuItems array) as the starting value for the "items" state

    const [items, setItems] = useState(startingItems);

    // In React you are NOT allowed to mutate (AKA Change) the state directly for any state value. Instead you can create a new copy of the value and set that as the new state value using the function (setItems in this case) returned from the useState function.

    function updateQty (itemId, newQty){
        //A new update copy of the items (aka menuItems) array is created and set to the 'newItems'var by mapping through the current value of the array and updating the qty value for the object (aka type of pizza) that was selected.

        const newItems = items.map(i => {
            // Checking to see if the id (aka itemId) passed into the updateQty matches the id of the array item/object that is currently being passed into the function (aka the function for the map method)

            if (i.id === itemId){
                //Creating a new object and spreading the properties in the array/object that is currently being passed into this function (aka the function for the map method). Also, updating the value of the qty property by overriding the value for that property. Finally, returning the new object so it will be added as an item in the new array that is returned from using the map method.
                return {...i, qty: newQty};
            }

            //Returning the item/object without making any changes to it 
            return i;
        });

         // Setting the new array value (AKA "newItems" variable) that was returned from the map method as the new state value for "items". Also, because the "setItems" state function is used update the value for "items" the Menu component re-renders which causes the three MenuItem component to be created (AKA Rendered) again as well

         setItems(newItems);
    }



    //Using forEach to run a function forEach object in the objects state (aka "menu-items" array) each time the function is run it multiplies qty * price values for that object and adds the result to the current "total" value. When it has run teh function for each item in teh array it plugs in the final "total" value into the h2 element at the bottom of the Menu Component.

    let total = 0;
    items.forEach(i => {
        total += i.price * i.qty;
    });

    return (
        <section className="Menu">
            <h1 className="Menu-title">Mama Mia Pizzeria</h1>
            <div>
                {/* <MenuItem
                type={startingItems[0].type}
                price={startingItems[0].price}
                qty={startingItems[0].qty}
                />
                <MenuItem
                type={startingItems[1].type}
                price={startingItems[1].price}
                qty={startingItems[1].qty}
                />
                <MenuItem
                type={startingItems[2].type}
                price={startingItems[2].price}
                qty={startingItems[2].qty}
                /> */}

                {/* Using the map method, which returns a new array whose item values are determined by what is returned from the function passed into the map method. This function is run for each item in the array that the map method is used on. In this case a new MenuItem component is returned/created each time the function is run. */}

                {items.map(i => (
                    <MenuItem 
                    //Keys help React identify which items have been changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity. 
                    key ={i.id}
                    id ={i.id}
                    type ={i.type}
                    price ={i.price}
                    qty ={i.qty}

                    // Passing the 'updateQty' function as a value for the "updateQty" prop in each one of the "menuItem" components

                    updateQty = {updateQty}

                    />
                ))}
            </div>
            <h2>Grand Total: ${total}</h2>
        </section>
    )
}

export default Menu;
