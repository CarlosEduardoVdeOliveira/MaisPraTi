import { Input } from "../components/Input";
import { List } from "../components/List";
import { peoples } from "../data.js";
import { useState } from "react";

export function ListFilter() {
  const [search, setSearch] = useState("");

  const changeSearch = (event) => {
    const inputValue = event.target.value;
    setSearch(inputValue);
  };
  const filterPeoples =
    search.length > 0
      ? peoples.filter(
          (people) =>
            people.name.toLowerCase().includes(search.toLowerCase()) ||
            people.email.toLowerCase().includes(search.toLowerCase())
        )
      : [];
  return (
    <div>
      <div className="flex mt-8">
        <Input
          value={search}
          type="search"
          onChange={(event) => changeSearch(event)}
          placeholder="Pesquisar..."
        />
      </div>
      <ul className="mt-11 w-full">
        {search.length > 0
          ? filterPeoples.map((people) => (
              <List key={people.id}>
                <span className="ml-4">{people.name}</span>
                <span>{people.email}</span>
              </List>
            ))
          : peoples.map((people) => (
              <List key={people.id}>
                <span className="ml-4">{people.name}</span>
                <span>{people.email}</span>
              </List>
            ))}
      </ul>
    </div>
  );
}
