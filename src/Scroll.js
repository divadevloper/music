import React, { useState, useEffect } from 'react';

const Scroll = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Add scroll event listener when component mounts
        window.addEventListener('scroll', handleScroll);
        // Remove scroll event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to handle scroll event
    const handleScroll = () => {
        // Change visibility state based on scroll position
        if (window.pageYOffset > 200) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Function to scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll behavior
        });
    };

    return (
        <div>
            {/* Render scroll button only if isVisible state is true */}
            {isVisible && (
                <div className='buttonnn'>
                    <button className="scroll-btn" onClick={scrollToTop}>
                        <i className='fa fa-angle-up'></i>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Scroll;
