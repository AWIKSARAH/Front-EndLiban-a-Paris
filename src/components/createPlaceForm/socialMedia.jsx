const socialMediaOptions = [
  "facebook",
  "instagram",
  "twitter",
  "linkedIn",
  "snapchat",
  "pinterest",
  "youtube",
  "tiktok",
  "whatsapp",
  "telegram",
];

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
            required
            type="text"
        placeholder="URL"
        defaultValue={props.item.url}
        onChange={(e) => props.handleSocialMediaChange(props.index, e)}
      />
    </div>
  );
}
export default SocialMedia;
