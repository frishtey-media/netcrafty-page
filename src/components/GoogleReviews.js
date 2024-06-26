import { useEffect } from 'react';

// https://www.commoninja.com/google-reviews/editor/settings/4b8099c5-16bf-4d4f-aa5d-23a2700a3d3a?projectId=

const GoogleReviews = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://cdn.commoninja.com/sdk/latest/commonninja.js";
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="commonninja_component pid-d13e7bb6-5748-4fc5-b84d-ec0e4f8adc2c"></div>
    );
};

export default GoogleReviews;
