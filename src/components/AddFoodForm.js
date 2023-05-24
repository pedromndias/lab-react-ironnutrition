import { Divider, Input } from 'antd';
import { useState } from 'react';

// This component will receive the function addFood as props. Let's destructure props and get it:
function AddFoodForm({addFood}) {
    // Let's create state for each form input:
    const [nameInput, setNameInput] = useState("")
    const [imageInput, setImageInput] = useState("")
    const [caloriesInput, setCaloriesInput] = useState(0)
    const [servingsInput, setServingsInput] = useState(0)

    // We also need handlers for each change. Each one sets the specific state as the value from the input
    const handleNameChange = (event) => setNameInput(event.target.value)
    const handleImageChange = (event) => setImageInput(event.target.value)
    const handleCaloriesChange = (event) => setCaloriesInput(event.target.value)
    const handleServingsChange = (event) => setServingsInput(event.target.value)

    // console.log(nameInput);
    // console.log(imageInput);
    // console.log(caloriesInput);
    // console.log(servingsInput);

    // Let's create a function that manages the form when we press the submit button:
    const handleFormSubmit = (event) => {
        // First we avoi the page to refresh:
        event.preventDefault()

        // Now we create a variable with the new food:
        const newFood = { name: nameInput, image: imageInput, calories: caloriesInput, servings: servingsInput }
        // console.log(newFood);
        // And use the props function to send it to the App component:
        addFood(newFood)

        // And finally clear the form fields:
        setNameInput("")
        setImageInput("")
        setCaloriesInput(0)
        setServingsInput(0)
    }
    

  return (
    // Let's return a controlled form:
    <form className='create-form' onSubmit={handleFormSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={nameInput} type="text" onChange={handleNameChange} />

      <label>Image</label>
      {/* render antd <Input /> type="text" here */}
      <Input value={imageInput} type="text" onChange={handleImageChange} />

      <label>Calories</label>
      {/* render antd <Input /> type="number" here */}
      <Input value={caloriesInput} type="number" onChange={handleCaloriesChange} />

      <label>Servings</label>
      {/* render antd <Input /> type="number" here */}
      <Input value={servingsInput} type="number" onChange={handleServingsChange} />

      <button className='create-button' type="submit">Create</button>
    </form>
  )
}

export default AddFoodForm