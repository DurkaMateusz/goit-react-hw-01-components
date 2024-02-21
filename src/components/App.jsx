import Profile from "./profile/profile.jsx";
import user from "../inputs/user/user.json";
import Statistics from "./statistics/statistics.jsx";
import stat from "../inputs/data/data.json"

export const App = () => {
  return (
    <div>
    <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />
  <Statistics stats={stat} title="Upload Stats" />
  </div>
  );
};
