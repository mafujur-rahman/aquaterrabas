import Footer from '@/components/shared/Footer/Footer';
import Navbar from '@/components/shared/Navbar/Navbar';
import React from 'react';
import { ContactBanner } from './ContactBanner';
import ContactArea from './ContactArea';
import Map from './Map';

const ContactHome = () => {
    return (
        <div>
            <Navbar />
            <ContactBanner />
            <ContactArea />
            <Map />
            <Footer />
        </div>
    );
};

export default ContactHome;