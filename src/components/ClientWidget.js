import { useEffect } from 'react';

const ClientWidget = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://static.elfsight.com/platform/platform.js';

        script.async = true;
        script.defer = true;

        script.onload = () => {
            const anchorElement = document.querySelector('.jPkWoP a');

            if (anchorElement) {
                anchorElement.style.backgroundColor = 'black'; // Replace 'your-new-color' with the desired background color
            }
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="elfsight-app-481caf9a-da67-43a1-82b2-e2cafa6d2eb0" data-elfsight-app-lazy></div>
    );
};

export default ClientWidget;
