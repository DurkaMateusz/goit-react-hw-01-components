import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistics.module.css';

const Statistics = ({title, stats}) => (
    <section className={styles.statistics}>
  <h2 className={styles.title}>Upload stats</h2>

  <ul className={styles.statList}>
    {stats.map(stat => (
    <li key={stat.id} className={styles.item}>
      <span className={styles.label}>{stat.label}</span>
      <span className={styles.percentage}>{stat.percentage}%</span>
    </li>
    ))}
  </ul>
</section>
);

Statistics.propTypes = {

};

export default Statistics