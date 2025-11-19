import Footer from '@/components/shared/Footer/Footer';
import Navbar from '@/components/shared/Navbar/Navbar';
import React from 'react';
import { ShopBanner } from './ShopBanner';
import ShopArea from './ShopArea';

const ShopHome = () => {
    return (
        <div>
            <Navbar />
            <ShopBanner />
            <ShopArea />
            <Footer />
        </div>
    );
};

export default ShopHome;