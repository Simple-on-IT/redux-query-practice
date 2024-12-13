import React, { useState } from 'react';
import styles from './GiftItem.module.css';
import { useUpdateGiftMutation } from '@/app/api/giftsApi';
import { EditGiftForm } from '@/features/EditGiftForm/ui/EditGiftForm';

interface GiftProps {
  id: number;
  name: string;
  description: string;
}

export const GiftItem: React.FC<GiftProps> = ({ id, name, description }) => {
  const [isEditing, setIsEditing] = useState(false);
  // const ... = useUpdateGiftMutation();

  const handleSave = async (updatedName: string, updatedDescription: string) => {
    // await updateGift({ id, name: updatedName, description: updatedDescription });
    setIsEditing(false);
  };

  return (
    <div className={styles.giftItem}>
      {isEditing ? (
        <EditGiftForm
          initialName={name}
          initialDescription={description}
          onSubmit={handleSave}
        />
      ) : (
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};