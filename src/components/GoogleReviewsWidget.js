import React, { useEffect } from 'react';

const GoogleReviewsWidget = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://static.elfsight.com/platform/platform.js';
        script.setAttribute('data-use-service-core', '');
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="elfsight-app-983c7634-aed4-4276-8670-4f6bcba12bdd" data-elfsight-app-lazy></div>
    );
};

export default GoogleReviewsWidget;
