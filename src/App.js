import "./App.css";
import axios from "axios";
import Main from "./components/Main";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

const App = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:4000");
    setIsLoading(false);
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <div className="loading-screen">Loading...</div>
  ) : (
    <div className="App">
      <Header />
      <Main data={data} />
    </div>
  );
};

export default App;
