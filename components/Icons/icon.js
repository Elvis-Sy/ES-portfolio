import {
  IconMail,
  IconLinkedin,
  IconInstagram,
  IconTwitter,
  IconGithub,
  IconExternal,
  IconFacebook,
} from "@/components/Icons";
import IconWhatsapp from "./whatsapp";

const Icon = ({ name }) => {
  switch (name) {
    case "mail":
      return <IconMail />;
    case "github":
      return <IconGithub />;
    case "linkedin":
      return <IconLinkedin />;
    case "instagram":
      return <IconInstagram />;
    case "twitter":
      return <IconTwitter />;
    case "facebook":
      return <IconFacebook />;
    case "whatsapp":
      return <IconWhatsapp />;
    default:
      return <IconExternal />;
  }
};

export default Icon;
