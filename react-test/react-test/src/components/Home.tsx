import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
}

interface HomeProps {
  onAddFriend: (user: User) => void;
}

const Home: React.FC<HomeProps> = ({ onAddFriend }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('http://localhost:3002/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <div className="home">
      <h1>Home</h1>
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <img className="profile-picture" src={user.profilePicture} alt={user.firstName} />
          <h2>{`${user.firstName} ${user.lastName}`}</h2>
          <Link to={`/profile/${user.id}`} className="profile-link">See Profile</Link>
          <button onClick={() => onAddFriend(user)} className="add-friend-button">Add Friend</button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Home;
