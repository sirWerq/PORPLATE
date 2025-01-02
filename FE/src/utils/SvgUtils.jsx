import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
const ExternalSVG = ({ svgUrl, fillColor }) => {
    const [svgContent, setSvgContent] = useState(null);

    useEffect(() => {
        const loadSVG = async () => {
            try {
                const response = await fetch(svgUrl);
                const svgText = await response.text();
                const parser = new DOMParser();
                const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
                const svgElement = svgDoc.documentElement;

                svgElement.querySelectorAll('path').forEach((path) => {
                    path.setAttribute('fill', fillColor);
                });

                console.log(svgElement);

                setSvgContent(svgElement.outerHTML);
            } catch (error) {
                console.error('Error loading SVG:', error);
            }
        };

        loadSVG();
    }, [svgUrl, fillColor]);

    return <div dangerouslySetInnerHTML={{ __html: svgContent }} />;
};

export default ExternalSVG;
