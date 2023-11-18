/* eslint-disable react/prop-types */

import Tilt from 'react-parallax-tilt';

const Cover = ({ img, title, subHeading }) => {
    return (
        <Tilt
            className="parallax-effect-glare-scale"
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.30}
            scale={.8}
        >
            <div className="inner-element">
                <div className="hero mb-20 h-[500px]" style={{ backgroundImage: `url(${img})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content bg-black px-32 bg-opacity-60 py-20 ">
                        <div className=" ">
                            <h1 className="mb-5 text-5xl tex-white font-bold">{title}</h1>
                            <p className="mb-5 text-white font-bold">{subHeading}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Tilt>

    );
};

export default Cover;