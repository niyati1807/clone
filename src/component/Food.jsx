import React from "react";
import "./navbar.css";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Food = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((rs) => rs.json())
      .then((d) => setFood(d.recipes));
  }, []);

  return (
    <div className="container-fluid">  
      <h3 style={{marginLeft:"50px"}} >Food Delivery Restaurants in Ahmedabad</h3>
      {/* <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/js/all.min.js"
      /> */}
      <Row>
        {food.map((item) => (
          <Col className="d-flex justify-content-center p-4">
            <Card style={{ width: "280px" }} key={item.id}>
              <Card.Img variant="top" src={item.image} height={200} />
              <Card.Body style={{height: "120px"}}>
                <Card.Title className="Cardcond-flex justify-content-center">
                  
                  <div className="cardhead d-flex justify-content-between">
                    <h6> {item.name} </h6>
                    <div
                      className="bg-success text-white p-2 rounded"
                      style={{ fontSize: "10px" }}
                    >
                      <i
                        class="bi bi-star-fill"
                        style={{ fontSize: "10px" }}
                      ></i>
                      {item.rating}
                    </div>
                  </div>
                  <div
                    className="d-flex justify-content-between"
                    style={{ fontSize: "15px" }}
                  >
                    <p>{item.cuisine}</p>
                    <div className="d-flex flex-column align-items-end">
                      <p>$ {item.caloriesPerServing} per order</p>
                      <p className="text-secondary">{item.cookTimeMinutes + item.prepTimeMinutes} min</p>
                    </div>
                  </div>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Food;
