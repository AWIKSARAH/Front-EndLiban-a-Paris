import { useState } from "react";
import axios from "axios";
import "./createPlaceForm.css";
import ScheduleDay from "./day";
import { useLocation } from "react-router-dom";
import ImageInput from "./imageInput";
import SocialMedia from "./socialMedia";

const CreatePlaceForm = () => {
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
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
  const locationParam = useLocation();
  const params = new URLSearchParams(locationParam.search);
  const type = params.get("type");
  console.log(type)
  const handleSocialMediaChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...socialMedia];

    list[index][name] = value;
    setSocialMedia(list);
    console.log(socialMedia);
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
        "http://localhost:5000/api/files",
        formData
      );
      console.log(uploadResponse.data);

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
      };
      const createResponse = await axios.post(
        "http://localhost:5000/api/places",
        data
      );
      console.log(createResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  return (
    <form onSubmit={handleSubmit} className="listing--post_form ">
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="text"
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
          onChange={(e) => {
            setTags(e.target.value);
            console.log(tags);
          }}
        />
      </label>
      <br />
      <label>
        Location:
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <br />
      <label className="text--area_label">
        Description:
        <textarea
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
      <label >
        Social Media:
        <div
      style={{display:"flex",flexWrap:"wrap",gap:"3%"}}>
        {socialMapper()}
        </div>

      </label>
        <button name="add-social-media" type="button" onClick={handleAddSocialMedia}>
          Add Social Media
        </button>
      <br />

      <button name="submit" type="submit">Submit</button>
    </form>
  );

  function scheduleMapper() {
    return days.map((day) => (
      <ScheduleDay
        day={day}
        key={day}
        schedule={schedule}
        setSchedule={setSchedule} />
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

