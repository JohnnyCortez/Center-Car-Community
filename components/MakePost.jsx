import { supabase } from "../src/client";
import { useState } from "react";


const MakePost = (props) => {
    console.log(props.user)
    const [ownerID, setOwnerID] = useState(props.user);
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
    .from("PostTable")
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
  createPost();
}

return (
  <div>
    <br />
    <label>Title</label>
    <input
      type="text"
      id="title"
      name="title"
      onChange={(e) => setTitle(e.target.value)}
    />

<label>Make</label>
    <input
      type="text"
      id="make"
      name="make"
      onChange={(e) => setMake(e.target.value)}
    />

    <label>Model</label>
    <input
      type="text"
      id="model"
      name="model"
      onChange={(e) => setModel(e.target.value)}
    />

<label>Year</label>
    <input
      type="text"
      id="year"
      name="year"
      onChange={(e) => setYear(e.target.value)}
    />

<label>Short Description</label>
    <input
      type="text"
      id="shortDescr"
      name="shortDescr"
      onChange={(e) => setShortDescription(e.target.value)}
    />

<label>Description</label>
    <input
      type="text"
      id="description"
      name="description"
      onChange={(e) => setDescription(e.target.value)}
    />

<label>Power</label>
    <input
      type="text"
      id="power"
      name="power"
      onChange={(e) => setPower(e.target.value)}
    />

<label>Specs</label>
    <input
      type="text"
      id="specs"
      name="specs"
      onChange={(e) => setSpecs(e.target.value)}
    />

    <label>Modifications</label>
    <input
      type="text"
      id="modifications"
      name="modifications"
      onChange={(e) => setModification(e.target.value)}
    />

<label>Picture</label>
    <input
      type="text"
      id="picture"
      name="picture"
      onChange={(e) => setPicture(e.target.value)}
    />

    <button onClick={handleClick}>Submit</button>
    <br />
  </div>
);
  };

export default MakePost;