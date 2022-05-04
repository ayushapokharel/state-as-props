import Menu from './menu/Menu';
import './App.css';

const menuItems = [
  {
    id: 1,
    type: 'Slice of Cheese',
    price: 2,
    qty: 0
  },
  {
    id: 2,
    type: 'Slice of Pepperoni',
    price: 3,
    qty: 0
  },
  {
    id: 3,
    type: 'Slice of Sausage',
    price: 3,
    qty: 0
  },
  {
    id: 4,
    type: 'Slice of Pineapple',
    price: 2,
    qty: 0
  }
];


function App() {
  return (
    <div className="App">
      {/* <h1>Hello from the App Component</h1> */}
      {/* Passing the menuItems (array of objects) as the value for the startingItems prop in the Menu Component */}
      <Menu startingItems = {menuItems}/>
    </div>
  );
}


export default App;
