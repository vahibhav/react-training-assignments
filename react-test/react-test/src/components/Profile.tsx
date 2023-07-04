import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
}

const Profile: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [profile, setProfile] = useState<User | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3002/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setProfile(data));
  }, [userId]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <img src={profile.profilePicture} alt={profile.firstName} />
      <h2>{`${profile.firstName} ${profile.lastName}`}</h2>
      <p>ID: {profile.id}</p>
    </div>
  );
};

export default Profile;
