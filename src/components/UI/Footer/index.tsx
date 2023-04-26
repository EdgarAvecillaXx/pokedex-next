import Image from 'next/image';

import { Text } from '@nextui-org/react';
import styles from './footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles['footer-container']}>
      <div>
        <Text h2 color='white'>
          P
        </Text>
        <Text h3 color='white'>
          okedex app
        </Text>
      </div>
      <div>
        <Text h5 color='white' css={{ marginBottom: '0' }}>
          © 2023 Copyright: EA Engineering
        </Text>
        <Image className={styles['brand-logo']} alt='logo' src={'/ea.jpg'} width={40} height={40} />
      </div>
    </footer>
  );
};
