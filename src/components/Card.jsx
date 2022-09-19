/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Card.module.css';

export default function Card({ item }) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card__description__left}>
          <div>
            <span className={styles.card__description__title}>
              {' '}
              {item.dealType}
            </span>
          </div>
          <div>
            <span className={styles.card__description__number}>
              №
              {' '}
              {item.number}
            </span>
            <span className={styles.card__description__categoty}>
              {item.item.category}
              /
              {item.item.group}
            </span>
            <span className={styles.card__description__description}>{item.item.description}</span>
          </div>
          <div>
            <span className={styles.card__description__totalPrice}>
              {item.item.totalPrice}
              {' '}
              ₽
            </span>
            <span className={styles.card__description__nds}>Без НДС</span>
          </div>
          <div>
            <svg width="18" height="26" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M9 25C9 25 13.496 18.1429 16.1937 12.1429C18.8913 6.14286 14.3952 1 9 1C3.60476 1 -0.891276 6.14286 1.80634 12.1429C4.50397 18.1429 9 25 9 25ZM12.5968 8.71429C12.5968 10.6078 10.9865 12.1429 9 12.1429C7.01353 12.1429 5.40317 10.6078 5.40317 8.71429C5.40317 6.82074 7.01353 5.28571 9 5.28571C10.9865 5.28571 12.5968 6.82074 12.5968 8.71429Z" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className={styles.card__description__location}>{item.location ? item.location : 'не определено'}</span>
          </div>
        </div>
        <div className={styles.card__description__center}>
          <div>
            <span className={styles.card__description__title}>Количество</span>
            <span className={styles.card__description__content}>{item.item.quantity}</span>
          </div>
          <div>
            <span className={styles.card__description__title}>Единица измерения</span>
            <span className={styles.card__description__content}>{item.item.measurementUnit}</span>
          </div>
          <div>
            <span className={styles.card__description__title}>Стоимость за единицу измерения</span>
            <span className={styles.card__description__content}>{item.item.price}</span>
          </div>
        </div>
        <div className={styles.card__description__rigth}>
          <div>
            <span className={styles.card__description__title}>Начало сбора предложений</span>
            <span className={styles.card__description__content}>{(new Date(item.beginDate)).toLocaleString('ru-RU', options)}</span>
          </div>
          <div>
            <span className={styles.card__description__title}>Окончание сбора предложений</span>
            <span className={styles.card__description__content}>{(new Date(item.endDate)).toLocaleString('ru-RU', options)}</span>
          </div>

          <div>
            <span className={styles.card__description__title}>Участников</span>
            <span className={styles.card__description__content}>{item.participants.count}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
