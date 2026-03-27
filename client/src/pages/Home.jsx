import "../App.css";
import { useState, useEffect } from "react";
import Card from "../components/Card"

function Home() {

  const [foodTrucks, setFoodTrucks] = useState([]);

  const allFoodTrucks = async () => {
    const response = await fetch("/api/get-all-food-trucks");
    const data = await response.json();

    setFoodTrucks(data);
  };

  const deleteTruck = async (id) => {
    await fetch(`http://localhost:3000/delete-one-food-truck/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    }
    )
    allFoodTrucks();
  };


  useEffect(() => {
    allFoodTrucks()
  }, []);
  
  return <>
    
    <h1>All Food Trucks</h1>
    <h2>Total number of food trucks: {foodTrucks.length}</h2>

    <section className="card-wrapper">
    {
      foodTrucks.map(truck => (
        <Card
          key={truck.id}
          name={truck.name}
          onDelete={() => deleteTruck(truck.id)}
          truck={truck}
          />
      )
      )
    }
    </section>
  </>;
}

export default Home;
