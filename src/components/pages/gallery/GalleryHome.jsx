import Footer from '@/components/shared/Footer/Footer';
import Navbar from '@/components/shared/Navbar/Navbar';
import React from 'react';
import { GalleryBanner } from './GalleryBanner';
import FishGallery from './FishGallery';

const GalleryHome = () => {
    return (
        <div>
            <Navbar />
            <GalleryBanner />
            <FishGallery />
            <Footer />
        </div>
    );
};

export default GalleryHome;