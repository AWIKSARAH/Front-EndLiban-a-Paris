
const socialMediaOptions = ["facebook", "twitter", "instagram", "linkedIn"];

function SocialMedia(props) {
    return (
      <div className="social--selector_wrapper">
        <select
          name="name"
          defaultValue={props.item.name}
          onChange={(e) => props.handleSocialMediaChange(props.index, e)}
        >
          {socialMediaOptions.map((option, index) => {
            return (
              <option value={option} key={index}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </option>
            );
          })}
        </select>
        <input
          name="url"
          type="text"
          placeholder="URL"
          defaultValue={props.item.url}
          onChange={(e) => props.handleSocialMediaChange(props.index, e)}
        />
      </div>
    );
  }
  export default SocialMedia