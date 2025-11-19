import React from 'react';

const Map = () => {
    // Replace the iframe src with your actual Google Maps embed link.
    // The current link is central London location based on the image.
    const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.565886475653!2d-0.11950798423087315!3d51.50329727963479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00b21498b0b%3A0x6b4904d96c8cc761!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1678886400000!5m2!1sen!2suk";


    return (
        <div className="w-full">
            <div className="w-full h-[400px] border border-gray-200 rounded-lg shadow-xl overflow-hidden">
                <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location Map"
                ></iframe>
            </div>
        </div>
    );
};

export default Map;