import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import SocialMediaSVG from "../../components/Media/SocialMediaSVG";
import "./style.css"
import CardWithDetailInformation from "../../components/Card/CardWithDetailInformation";

const LandingPage = () => {
    const theme = useSelector((state: RootState) => state.themeChange.Theme);

    const positions = [
        "Full-Stack Developer",
        "Web Developer",
        "Mobile Developer",
        "Back-End Developer",
        "Software Developer",
    ];

    const [currentPosition, setCurrentPosition] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPosition((prev) => (prev + 1) % positions.length);
        }, 1500);

        return () => clearInterval(interval);
    }, [positions.length]);

    return (
        <>
            <div className={`${theme} lg:h-screen bg-center flex px-8 lg:px-16 flex-col-reverse lg:flex-row `}>
                <div className="flex flex-col w-full lg:w-7/12 items-start justify-center ">
                    <h4 className="text-primary">Welcome</h4>
                    <h1>
                        I'm <span className="text-primary">{positions[currentPosition]}</span>
                    </h1>
                    <br />
                    <p className="font-medium">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s s
                    </p>
                    <br />
                    <SocialMediaSVG />
                    <br />
                    <button type="button" className="gradient-button">
                        Download CV
                    </button>

                </div>

                <div className="flex w-full lg:w-5/12 items-center justify-center p-1 bg-b max-lg:mt-[64px]">
                    <img
                        src="https://cdn.pixabay.com/photo/2017/09/01/00/15/png-2702691_1280.png"
                        alt="Deskripsi Gambar"
                        className="max-w-full h-auto block"
                    />
                </div>
            </div>
            <div className={`${theme} px-8 lg:px-16`}>

                <div className="flex items-center w-full">
                    <div className="flex-grow h-1 rounded-full backround-primary"></div>
                    <h2 className="mx-4 font-bold text-primary">My SKill</h2>
                    <div className="flex-grow h-1 rounded-full backround-primary"></div>
                </div>
                <br />
                <p className="font-medium text-center">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s s
                </p>
                <br />
                <div className="flex items-center justify-center w-full ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        <CardWithDetailInformation />
                        <CardWithDetailInformation />
                        <CardWithDetailInformation />
                    </div>
                </div>
            </div>
            <br />
        </>
    );
};

export default LandingPage;
