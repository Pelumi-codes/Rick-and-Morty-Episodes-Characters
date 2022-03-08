import "./App.css";
import Layout, { Content } from "antd/lib/layout/layout";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Character from "./components/Characters/Loadable";
import SingleCharacter from "./components/Episodes";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Home from "./components/Home";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [apiData, setApiData] = useState([]);

  const fetchData = async (pageNumber, search) => {
    const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
    try {
      let response = await fetch(api);
      const data = await response.json();

      //increment in number of pages
      if (pageNumber > 1) {
        const updatedState = apiData.concat(data?.results);
        setApiData(updatedState);
        return;
      }
      setApiData(data?.results);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData(pageNumber, search);
  }, [pageNumber, search]);

  const fetchMoreData = () => {
    fetchData(pageNumber + 1, search);
  };

  return (
    <Router>
      <div className="App">
        <Layout className="layout">
          <Link to="/">
            <Home />
          </Link>
          <Navigation />
          <Content>
            <Switch>
              <Route
                path="/"
                exact
                render={(props) => (
                  <InfiniteScroll
                    dataLength={apiData.length}
                    next={() => fetchMoreData()}
                    hasMore={true}
                    endMessage={
                      <p style={{ textAlign: "center" }}>
                        <b>Yay! You have seen it all</b>
                      </p>
                    }
                  >
                    <Character characters={apiData} {...props} />
                  </InfiniteScroll>
                )}
              />
              <Route
                path="/characters/:id"
                render={(props) => (
                  <SingleCharacter characters={apiData} {...props} />
                )}
              />
            </Switch>
          </Content>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
