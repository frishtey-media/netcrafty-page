// components/CalendlyWidget.js

import { useEffect } from 'react';

const CalendlyWidget2 = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="calendly-inline-widget" data-url="https://calendly.com/netcrafty/client-consultation?hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=f8ac23" style={{ minWidth: '320px', height: '100vh' }} />
    );
};

export default CalendlyWidget2;
