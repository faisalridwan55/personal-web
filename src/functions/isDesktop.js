import { useEffect, useState } from "react";

const IsDesktop = () => {
	const [width, setWidth] = useState(window.innerWidth);
    const breakPoint = 768 // Tablet size
    const desktop = width > breakPoint;

	useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

	return desktop;
}

export default IsDesktop;