import Profile from './profile/profile.jsx';
import user from '../inputs/user/user.json';
import Statistics from './statistics/statistics.jsx';
import data from '../inputs/data/data.json';
import FriendList from './friendlist/friendlist.jsx';
import friends from '../inputs/friends/friends.json';
import TransactionHistory from './transactionhistory/transactionhistory.jsx';
import transaction from '../inputs/transactions/transactions.json';

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
    <Statistics
    stats={data}
    title="Upload Stats" 
  />
  <FriendList
    friends={friends} />;
  <TransactionHistory 
    items={transaction} />
  </div>
  );
};
