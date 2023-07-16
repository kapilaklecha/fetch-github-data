import PartyComponent from "./components/PartyComponent";
import List from "./components/List";
import useDebounce from "./hooks/useDebounce";

import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const debouncedSearchValue = useDebounce(searchValue, 1000);

  return (
    <div className="app">
      <PartyComponent
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        className="input"
      />
      <div className="list">
        <List searchTerm={debouncedSearchValue} />
      </div>
    </div>
  );
}

export default App;
