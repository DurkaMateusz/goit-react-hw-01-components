import React from 'react';
import PropTypes from 'prop-types';
import styles from './friendlist.module.css';

const FriendListItem = ({avatar, name, isOnline}) => (
<li className={styles.item}>
  <span className={styles.status+ '' +isOnline ? styles.online : styles.offline}></span>
  <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={styles.name}>{name}</p>
</li>

);

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};


const FriendList = ({friends}) => (
    <ul className={styles.friendList}>
  {friends.map(friend => (
  <FriendListItem 
  key={friend.id}
  avatar={friend.avatar}
  name={friend.name}
  isOnline={friend.isOnline}
   />
  ))}
</ul>
);

export default FriendList
