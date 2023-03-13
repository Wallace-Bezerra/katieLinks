import {
  ProfileContainer,
  ProfileHeader,
  ProfileInfo,
  Separator,
} from "./styles";
import profileImage from "../../assets/profileImage.jpg";
import banner from "../../assets/banner.jpg";
import twitch from "../../assets/twitch-icon.svg";
import cat from "../../assets/cat.svg";
import heart from "../../assets/heart.svg";

export const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileHeader>
        <img src={banner} alt="banner" />
        <div className="profileImage">
          <img src={profileImage} alt="Profile image" />
        </div>
        <a target="_blank" href="https://www.twitch.tv/eukatie">
          <img src={twitch} alt="twitch icone" />
          <span>euKatie</span>
        </a>
      </ProfileHeader>
      <ProfileInfo>
        <div className="top">
          <div className="headline">
            <h1>Katie</h1>
            <Separator />
            <p>Streamer na Twitch</p>
            <span>+7K</span>
          </div>
          <img src={cat} alt="cat svg" />
        </div>
        <div className="description">
          <p>
            React de Filmes, Realitys, Animes e Músicas. Vem me fazer companhia{" "}
            <img src={heart} />
          </p>
          <p className="live">Lives de Quinta à Segunda</p>
        </div>
      </ProfileInfo>
    </ProfileContainer>
  );
};
