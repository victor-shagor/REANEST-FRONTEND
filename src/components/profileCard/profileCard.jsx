import React from "react";
import { Card } from "./styles";

const ProfileCard = ({profile}) => {
  return (
    <Card>
      <div className="proPicture">
          <div className="img">
          <img
            src="https://i.ibb.co/swkR93p/bramdejager-600x600.png"
            alt="profile"
            height="120px"
          />
          </div>
          <div className='name'>
          <p>{profile && profile.name}</p>
          <p>ID :{profile && profile.id.value}</p>
          </div>
      </div>
      <div className='btn'>
        <button className='link'>View Profile</button>
      </div>
    </Card>
  );
};

export default ProfileCard;
