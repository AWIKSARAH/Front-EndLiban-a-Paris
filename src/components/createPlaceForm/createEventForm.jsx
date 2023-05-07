import { useEffect, useState } from "react";
import axios from "axios";
import "./createPlaceForm.css";
import ScheduleDay from "./day";
import {  useNavigate, useParams } from "react-router-dom";
import ImageInput from "./imageInput";
import SocialMedia from "./socialMedia";
import { days } from "./days";
import { category as categoryList } from "../../common/arraysOfTheEnums/enums";

const CreateEventForm = () => {
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [tel, setTel] = useState("");
  const [tags, setTags] = useState("");
  const [website, setWebsite] = useState("")
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [category, setCategory] = useState(categoryList[0]);
  const { type } = useParams();
  const navigate=useNavigate()
  const [socialMedia, setSocialMedia] = useState([
      { name: "facebook", url: "" },
    ]);

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
    formData.append("event", image);

    try {
      const uploadResponse = await axios.post(
        "http://localhost:5000/api/files/event",
        formData
      );

      const { image } = uploadResponse.data;
      console.log(uploadResponse)
      const data = {
        title,
        website,
        tel,
        description,
        start_date: startDate,
        end_date: endDate,
        location,
        socialMedia,
        image,
        tags: tags
        .toString()
        .split(",")
        .map((e) => e.trim()),
        type,
        category,
      };
      const createResponse = await axios.post(
        "http://localhost:5000/api/events",
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
          Website:
          <input
            type="text"
            required
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </label>
        <select
        name="name"
        defaultValue={category}
        onChange={(e) =>setCategory(e.target.value)}
      >
        {categoryList.map((option, index) => {
          return (
            <option value={option} key={index}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </option>
          );
        })}
      </select>
        <br />
        <label>
          Start Date:
          <input
            type="date"
            required
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <br />
        <label>
          End Date:
          <input
            type="date"
            required
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
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
export default CreateEventForm;
