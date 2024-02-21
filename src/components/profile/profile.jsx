import React from "react";
import PropTypes from "prop-types";
import styles from "./profile.module.css";

const Profile = ({username, tag, location, avatar, stats}) => (
    <div className={styles.profile}>
  <div className={styles.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={styles.avatar}
    />
    <p className={styles.name}>{username}</p>
    <p className={styles.tag}>{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>

  <ul className={styles.stats}>
    <li>
      <span className={styles.label}>Followers</span>
      <span className={styles.quantity}>{stats.quantity}</span>
    </li>Name
    <li>Name
      <span className={styles.label}>Views</span>
      <span className={styles.quantity}>{stats.quantity}</span>
    </li>Name
    <li>Name
      <span className={styles.label}>Likes</span>
      <span className={styles.quantity}>{stats.quantity}</span>
    </li>
  </ul>
</div>
);

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.number.isRequired,
};

export default Profile
