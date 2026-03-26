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
    await fetch(`/api/delete-one-food-truck/${id}`, {
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
    {
      foodTrucks.map(truck => (
        <Card
          key={truck.id}
          name={truck.name}
          onClick={() => deleteTruck(truck.id)}
          truck={truck}
          />
      )
      )
    }
    
  </>;
}

export default Home;
