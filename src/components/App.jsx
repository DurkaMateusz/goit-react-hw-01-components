import Profile from "./profile/profile.jsx";
import user from "../inputs/user/user.json";
export const App = () => {
  return (
    <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />
  );
};
