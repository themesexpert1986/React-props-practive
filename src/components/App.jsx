import React from "react";
import Card from "./Card";
import Head from "./Heading";
import contacts from "../contacts.js";

function App() {
  return (
    <div>
      <Head />
      <Card
        name={contacts[0].name}
        email={contacts[0].email}
        phone={contacts[0].phone}
        imgURL={contacts[0].imgURL}
      />
      <Card
        name={contacts[1].name}
        email={contacts[1].email}
        phone={contacts[1].phone}
        imgURL={contacts[1].imgURL}
      />
      <Card
        name={contacts[2].name}
        email={contacts[2].email}
        phone={contacts[2].phone}
        imgURL={contacts[2].imgURL}
      />
    </div>
  );
}

export default App;
