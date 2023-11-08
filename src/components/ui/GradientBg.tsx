import React, { useEffect, useRef } from "react";

const GradientBg = () => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const element = ref.current;
        if (element && element.parentElement) {
            element.style.height = element.parentElement.style.height;
        }
    }, [ref]);

    return (
        <div className="main-bg" ref={ref}>
            <div className="gradient"></div>
        </div>
    );
};

export default GradientBg;
