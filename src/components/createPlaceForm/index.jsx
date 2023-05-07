import { useEffect, useState } from "react";
import axios from "axios";
import "./createPlaceForm.css";
import ScheduleDay from "./day";
import {  useNavigate, useParams } from "react-router-dom";
import ImageInput from "./imageInput";
import SocialMedia from "./socialMedia";
import { days } from "./days";

const CreatePlaceForm = () => {
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [tel, setTel] = useState("");
  const [socialMedia, setSocialMedia] = useState([
    { name: "facebook", url: "" },
  ]);
  const [tags, setTags] = useState("");
  const [schedule, setSchedule] = useState({
    monday: { status: "closed", fromTo: "" },
    tuesday: { status: "closed", fromTo: "" },
    wednesday: { status: "closed", fromTo: "" },
    thursday: { status: "closed", fromTo: "" },
    friday: { status: "closed", fromTo: "" },
    saturday: { status: "closed", fromTo: "" },
    sunday: { status: "closed", fromTo: "" },
  });
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate()

  const { type } = useParams();
  const handleSocialMediaChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...socialMedia];

    list[index][name] = value;
    setSocialMedia(list);
  };

  const handleAddSocialMedia = () => {
    setSocialMedia([...socialMedia, { name: "", url: "" }]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("place", image);

    try {
      const uploadResponse = await axios.post(
        "http://localhost:5000/api/files/place",
        formData
      );

      const { image } = uploadResponse.data;
      const data = {
        title,
        email,
        description,
        socialMedia,
        tags: tags
          .toString()
          .split(",")
          .map((e) => e.trim()),
        placeType: type,
        image: image,
        location,
        schedule,
        tel
      };
      const createResponse = await axios.post(
        "http://localhost:5000/api/places",
        data
      );
      if(createResponse.data.success){
        navigate("/listing/success")
      }

    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="div--padding">
      <h2>{type?.charAt(0).toUpperCase() + type?.slice(1)}</h2>
      <form onSubmit={handleSubmit} className="listing--post_form ">
        <label>
          Title:
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Tags:
          <input
            type="text"
            value={tags}
            required
            onChange={(e) => {
              setTags(e.target.value);
            }}
          />
        </label>
        <label>
          Tel:
          <input
            type="text"
            required
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
        </label>
        <br />
        <label>
          Location:
          <input
            required
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <br />
        <label className="text--area_label">
          Description:
          <textarea
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <br />
        <ImageInput setImage={setImage} />
        <br />
        <label>
          {" "}
          <p>Schedule</p>
          {scheduleMapper()}
        </label>
        <br />
        <label>
          Social Media:
          <div style={{ display: "flex", flexWrap: "wrap", gap: "3%" }}>
            {socialMapper()}
          </div>
        </label>
        <button
          name="add-social-media"
          type="button"
          onClick={handleAddSocialMedia}
        >
          Add Social Media
        </button>
        <br />

        <button name="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );

  function scheduleMapper() {
    return days.map((day) => (
      <ScheduleDay
        day={day}
        key={day}
        schedule={schedule}
        setSchedule={setSchedule}
      />
    ));
  }

  function socialMapper() {
    return socialMedia.map((item, index) => (
      <SocialMedia
        key={index}
        handleSocialMediaChange={handleSocialMediaChange}
        item={item}
        index={index}
      ></SocialMedia>
    ));
  }
};
export default CreatePlaceForm;
