import React from 'react';
import styles from './GiftList.module.css';
import { useGetGiftsQuery } from '@/app/api/giftsApi';
import { GiftItem } from './GiftItem';

export const GiftList: React.FC = () => {
  // const { ... } = useGetGiftsQuery();

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error loading gifts</div>;

  return (
    <div className={styles.giftList}>
      {/* тут нужен массив из <GiftItem key={gift.id} {...gift} */}

    </div>
  );
};