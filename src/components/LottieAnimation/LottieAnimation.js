import React from 'react';
import Lottie from 'react-lottie';

export const LottieAnimation = ({ lottie }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: lottie,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div>
            <Lottie options={defaultOptions} />
        </div>
    )
}