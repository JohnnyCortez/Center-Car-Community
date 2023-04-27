import { supabase } from "../src/client";
import { useState } from "react";
import { useLocation } from "react-router-dom";



const EditPost= (props) => {
    const location = useLocation();
  console.log(location)
  const { post } = location.state;
    console.log(post)

    const [title, setTitle] = useState(post.title);
    const [make, setMake] = useState(post.make);
    const [model, setModel] = useState(post.model);
    const [year, setYear] = useState(post.year);
    const [shortDescription, setShortDescription] = useState(post.shortDescr);
    const [description, setDescription] = useState(post.description);
    const [power, setPower] = useState(post.power);
    const [specs, setSpecs] = useState(post.specs);
    const [modifications, setModification] = useState(post.modifications);
    const [picture, setPicture] = useState(post.picture);


  const updatePost = async () => {
    await supabase
      .from("PostTable")
      .update({
        title: title,
        make: make,
        model: model,
        year: year,
        shortDescr: shortDescription,
        description: description,
        power : power,
        specs : specs,
        modifications : modifications,
        picture : picture,
      })
      .eq("id", post.id)
      .select();
    };

  function handleClick() {
    updatePost();
    window.location = "/";

  }

  return (
    <div>
    <br />
    <label>Title</label>
    <input
      type="text"
      id="title"
      name="title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />

<label>Make</label>
    <input
      type="text"
      id="make"
      name="make"
      value={make}
      onChange={(e) => setMake(e.target.value)}
    />

    <label>Model</label>
    <input
      type="text"
      id="model"
      name="model"
      value={model}
      onChange={(e) => setModel(e.target.value)}
    />

<label>Year</label>
    <input
      type="text"
      id="year"
      name="year"
      value={year}
      onChange={(e) => setYear(e.target.value)}
    />

<label>Short Description</label>
    <input
      type="text"
      id="shortDescr"
      name="shortDescr"
      value={shortDescription}
      onChange={(e) => setShortDescription(e.target.value)}
    />

<label>Description</label>
    <input
      type="text"
      id="description"
      name="description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />

<label>Power</label>
    <input
      type="text"
      id="power"
      name="power"
      value={power}
      onChange={(e) => setPower(e.target.value)}
    />

<label>Specs</label>
    <input
      type="text"
      id="specs"
      name="specs"
      value={specs}
      onChange={(e) => setSpecs(e.target.value)}
    />

    <label>Modifications</label>
    <input
      type="text"
      id="modifications"
      name="modifications"
      value={modifications}
      onChange={(e) => setModification(e.target.value)}
    />

<label>Picture</label>
    <input
      type="text"
      id="picture"
      name="picture"
      value={picture}
      onChange={(e) => setPicture(e.target.value)}
    />

    <button onClick={handleClick}>Submit</button>
    <br />
  </div>
  );
};

export default EditPost;