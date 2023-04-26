import { supabase } from "../src/client";
import { useState } from "react";


const MakePost = (props) => {
    const [ownerID, setOwnerID] = useState(null);
    const [title, setTitle] = useState(null);
    const [make, setMake] = useState(null);
    const [model, setModel] = useState(null);
    const [year, setYear] = useState(null);
    const [shortDescription, setShortDescription] = useState(null);
    const [description, setDescription] = useState(null);
    const [power, setPower] = useState(null);
    const [specs, setSpecs] = useState(null);
    const [modifications, setModification] = useState(null);
    const [picture, setPicture] = useState(null);

  
    const createPost = async () => {
    await supabase
    .from("UserTable")
    .insert({
      ownerID: ownerID,
      title: title,
      make: make,
      model: model,
      year: year,
      shortDescr: shortDescription,
      description: description,
      power : power,
      specs : specs,
      modifications : modifications,
      picture : picture
    })
    .select();
};

function handleClick() {
  createAccount();
}

return (
  <div>
    <h4> Create Post</h4>
    <br />
    <label>Title</label>
    <input
      type="text"
      id="user"
      name="user"
      onChange={(e) => setTitle(e.target.value)}
    />

<label>Make</label>
    <input
      type="text"
      id="user"
      name="user"
      onChange={(e) => setMake(e.target.value)}
    />

    <label>Model</label>
    <input
      type="text"
      id="user"
      name="user"
      onChange={(e) => setModel(e.target.value)}
    />

<label>Year</label>
    <input
      type="text"
      id="user"
      name="user"
      onChange={(e) => setYear(e.target.value)}
    />

<label>Short Description</label>
    <input
      type="text"
      id="user"
      name="user"
      onChange={(e) => setShortDescription(e.target.value)}
    />

<label>Desription</label>
    <input
      type="text"
      id="user"
      name="user"
      onChange={(e) => setDescription(e.target.value)}
    />

<label>Power</label>
    <input
      type="text"
      id="user"
      name="user"
      onChange={(e) => setPower(e.target.value)}
    />

<label>Specs</label>
    <input
      type="text"
      id="user"
      name="user"
      onChange={(e) => setSpecs(e.target.value)}
    />

    <label>Modifications</label>
    <input
      type="text"
      id="pass"
      name="pass"
      onChange={(e) => setModification(e.target.value)}
    />

<label>Picture</label>
    <input
      type="text"
      id="user"
      name="user"
      onChange={(e) => setPicture(e.target.value)}
    />

    <button onClick={handleClick}>Submit</button>
    <br />
  </div>
);
  };

export default MakePost;