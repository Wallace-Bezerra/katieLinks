import { LinksContainer } from "./styles";
import instagram from "../../assets/instagram-icon.svg";
import twitter from "../../assets/twitter-icon.svg";
import discord from "../../assets/discord-icon.svg";
import pix from "../../assets/pix-icon.svg";
export const Links = () => {
  return (
    <LinksContainer>
      <a target="_blank" href="https://www.instagram.com/eukatie1/">
        <div className="link">
          <img src={instagram} alt="instagram" />
        </div>
      </a>
      <a target="_blank" href="https://twitter.com/eukatie/">
        <div className="link">
          <img src={twitter} alt="twitter" />
        </div>
      </a>
      <a target="_blank" href="https://discord.com/invite/3asy9NFaBe">
        <div className="link">
          <img src={discord} alt="discord" />
        </div>
      </a>
      <a target="_blank" href="https://livepix.gg/eukatie">
        <div className="link">
          <img src={pix} alt="pix" />
        </div>
      </a>
    </LinksContainer>
  );
};
