import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import FriendsList from './components/FriendsList';
import Login from './components/Login';

interface Friend {
  id: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
}

const App: React.FC = () => {
  const [friends, setFriends] = useState<Friend[]>([]);

  const handleAddFriend = (user: Friend) => {
    setFriends([...friends, user]);
  };

  const handleRemoveFriend = (friend: Friend) => {
    const updatedFriends = friends.filter((f) => f.id !== friend.id);
    setFriends(updatedFriends);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/my-friends">My Friends</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home onAddFriend={handleAddFriend} />
          </Route>
          <Route path="/my-friends">
            <FriendsList friends={friends} onRemoveFriend={handleRemoveFriend} />
          </Route>
          <Route path="/profile/:userId" component={Profile} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;