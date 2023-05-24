import { Card, Col, Button } from 'antd';

// Note how we destructure the food object, the index property and the deleteFood function from props:
function FoodBox({food : {name, calories, image, servings}, index, deleteFood}) {
  return (
    <Col>
      <Card
        title={name}
        style={{ width: 230, height: 350, margin: 10 }}
        className='food-card'
      >
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories} * {servings} </b> kcal
        </p>
        <Button type="primary" onClick={() => deleteFood(index)}> Delete </Button>
      </Card>
    </Col>
  )
}

export default FoodBox