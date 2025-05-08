import React, { useRef, useEffect } from "react";

const IamAvailable = () => {
    const lineRef = useRef(null);

    const initialTranslateLTR = -48 * 4;
    const initialTranslateRTL = 36 * 4;

    useEffect(() => {
        const element = lineRef.current;
        if (!element) return;

        const isLTR = true;
        const speed = 0.8;

        const scrollHandler = () => {
            const translateX =
                (window.innerHeight - element.getBoundingClientRect().top) * speed;

            const totalTranslate = isLTR
                ? translateX + initialTranslateLTR
                : -(translateX + initialTranslateRTL);

            element.style.transform = `translateX(${totalTranslate}px)`;
        };

        const intersectionCallback = ([entry]) => {
            if (entry.isIntersecting) {
                document.addEventListener("scroll", scrollHandler);
            } else {
                document.removeEventListener("scroll", scrollHandler);
            }
        };

        const observer = new IntersectionObserver(intersectionCallback);
        observer.observe(element);

        // Cleanup on unmount
        return () => {
            observer.disconnect();
            document.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    return (
        <div
            id="step2"
            className="mb-12 border border-zinc-600 bg-[#edb25931] rounded-xl flex items-center overflow-hidden justify-center"
        >
            <div ref={lineRef} id="line-4" className="flex gap-8 p-7 items-center">
                {Array.from({ length: 10 }).map((_, index) => (
                    <React.Fragment key={index}>
                        <h3 className="whitespace-nowrap font-semibold text-2xl text-zinc-200">
                            I am Available
                        </h3>
                        <span className="text-4xl text-green-500">•</span>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default IamAvailable;
