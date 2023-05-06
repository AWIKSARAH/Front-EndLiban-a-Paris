import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";

const socialMediaLinks = [
  {
    icon: <FaFacebook className="social-icon" />,
    label: "Facebook",
    href: "https://www.facebook.com/Libanaparis"
  },
  {
    icon: <FaTwitter className="social-icon" />,
    label: "Twitter",
    href: "https://twitter.com/libanaparis"
  },
  {
    icon: <FaInstagram className="social-icon" />,
    label: "Instagram",
    href: "https://instagram.com/libanaparis"
  },
  {
    icon: <FaTiktok className="social-icon" />,
    label: "TikTok",
    href: "http://tiktok.com/@libanaparis"
  },
  {
    icon: <FaYoutube className="social-icon" />,
    label: "YouTube",
    href: "https://youtube.com/@libanaparis"
  }
];

export default function SocialMediaLinks() {
    return (<>
    {socialMediaLinks.map((link, index) => (
    <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
      {link.icon}
    </a>
  ))}
    </>  );
}
