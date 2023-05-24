import { useState } from 'react';
import './App.css';
// To start using the pre-made Ant Design components we must first import them:
import { Row, Divider, Button } from 'antd';

// import our foods json file:
import foods from './foods.json';
import FoodBox from './components/FoodBox.js';
import AddFoodForm from './components/AddFoodForm.js';
import Search from './components/Search.js';

function App() {
  // Let's create state for our food array:
  const [allFood, setAllFood] = useState(foods);

  // Let's create state for our search:
  const [searchInput, setSearchInput] = useState("")
  // console.log(searchInput)

  // Let's create state that manages if the form is shown or not:
  const [isFormShowing, setIsFormShowing] = useState(false)

  // Let's create a function to add a food to our foods array:
  const addFood = (newFood) => {
    // This function will be called from AddFoodForm component with the new food object as argument. Let's spread the previous array and add those foods together with the new one:
    let clonedFoods = [...allFood, newFood]
    // console.log(clonedFoods)
    // And set it as state:
    setAllFood(clonedFoods)
  }

  // Let's create a function that handles deleting a food item (will be called from our FoodBox component)
  const deleteFood = (index) => {
    // console.log("Trying to delete food: ", index);
    // First we clone the allFood array and then we delete the food with index "index":
    const clonedFoods = JSON.parse(JSON.stringify(allFood))
    clonedFoods.splice( index, 1)
    // And set our state to the new array:
    setAllFood(clonedFoods)
  }

  // Let's create a filtered array so we only render the filtered foods (by the search):
  let filteredFoods = allFood.filter(el => el.name.includes(searchInput))
  // console.log(filteredFoods)

  // Let's create a function that toggles the form (showing it or not):
  const toggleForm = () => {
    // console.log("Hide/Show form button pressed")
    // This function will change the state of isFormShowing:
    setIsFormShowing(!isFormShowing)
  }

  return (
    
    <div className="App">
      {/* Display Add Food component here */}
      {/* Note how we send the addFood function as props */}
      {/* Also note the conditional that only shows the form if isFormShowing is true: */}
      {isFormShowing && <AddFoodForm addFood={addFood}/>}

        {/*  Note the button with a toggleForm call. It also displays text depending on the boolean isFormShowing. */}
      <Button onClick={toggleForm}> {isFormShowing ? "Hide Form" : "Add New Food"} </Button>

      {/* Display Search component here */}
        {/* Note how we send the search state as props */}
      <Search searchInput={searchInput} setSearchInput={setSearchInput}/>

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Map through our filtered foods array and send it as props to the FoobBox component*/}
        {filteredFoods.map((el, index) => {
          return <FoodBox food={el} key={index} index={index} deleteFood={deleteFood}/>;
        })}
      </Row>
      {filteredFoods.length === 0 && <div>
            <p>Nothing to see here</p>
            <img src="https://cdn-icons-png.flaticon.com/512/32/32211.png" alt="empty"/>  
        </div>}
    </div>
  );
}

export default App;
