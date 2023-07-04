import React from 'react';
import { Link } from 'react-router-dom';
import './FriendList.css';


interface Friend {
  id: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
}

interface FriendsListProps {
  friends: Friend[];
  onRemoveFriend: (friend: Friend) => void;
}

const FriendsList: React.FC<FriendsListProps> = ({ friends, onRemoveFriend }) => {
  return (
    <div className="friends-list">
      <h1>My Friends</h1>
      {friends.map((friend) => (
        <div key={friend.id} className="friend-card">
          <img className="profile-picture" src={friend.profilePicture} alt={friend.firstName} />
          <h2>{`${friend.firstName} ${friend.lastName}`}</h2>
          <button onClick={() => onRemoveFriend(friend)} className="remove-friend-button">Remove Friend</button>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
