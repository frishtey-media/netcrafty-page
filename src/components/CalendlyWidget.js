// components/CalendlyWidget.js

import { useEffect } from 'react';

const CalendlyWidget = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;

        script.onload = () => {
            if (window.Calendly) {
                window.Calendly.initBadgeWidget({
                    url: 'https://calendly.com/netcrafty/client-consultation?background_color=1a1a1a&text_color=ffffff&primary_color=f8ac23',
                    text: 'Schedule meeting with us.',
                    color: '#f8ac23',
                    textColor: '#1a1a1a',
                    branding: true,
                });
            }
        };

        document.body.appendChild(script);

        return () => {
            // Cleanup Calendly widget when the component is unmounted
            if (window.Calendly) {
                window.Calendly.destroyBadgeWidget();
            }
        };
    }, []);

    return (
        <>
            <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
            <div id="calendly-badge-container" />
        </>
    );
};

export default CalendlyWidget;
