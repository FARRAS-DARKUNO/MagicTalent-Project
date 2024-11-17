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

    type ExperienceType = "work" | "learning" | "achievement";


    const experiences = [
        {
            year: "2020",
            title: "Junior Developer",
            company: "PT Nawa Data Solution.",
            type: "work" as ExperienceType, // Explicitly cast type to ExperienceType
            description:
                "Developed responsive web applications and optimized performance for client projects.",
        },
        {
            year: "2021",
            title: "Completed React Bootcamp",
            company: "PT Karya Sisi Teknis TBK",
            type: "learning" as ExperienceType, // Explicitly cast type to ExperienceType
            description:
                "Mastered React, Redux, and JavaScript concepts through hands-on projects and mentorship.",
        },
        {
            year: "2023",
            title: "Hackathon Winner",
            company: "Tech World",
            type: "achievement" as ExperienceType, // Explicitly cast type to ExperienceType
            description:
                "Won 1st place in a national hackathon for creating an innovative AI solution.",
        },
    ];

    const typeIcons = {
        work: (
            <svg className="w-6 h-6 text-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.382l1.447.723.005.003.027.013.12.056c.108.05.272.123.486.212.429.177 1.056.416 1.834.655C7.481 13.524 9.63 14 12 14c2.372 0 4.52-.475 6.08-.956.78-.24 1.406-.478 1.835-.655a14.028 14.028 0 0 0 .606-.268l.027-.013.005-.002L22 11.381V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.447 7.894.553-.276V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.382l.553.276.002.002.004.002.013.006.041.02.151.07c.13.06.318.144.557.242.478.198 1.163.46 2.01.72C7.019 15.476 9.37 16 12 16c2.628 0 4.98-.525 6.67-1.044a22.95 22.95 0 0 0 2.01-.72 15.994 15.994 0 0 0 .707-.312l.041-.02.013-.006.004-.002.001-.001-.431-.866.432.865ZM12 10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clip-rule="evenodd" />
            </svg>

        ),
        learning: (
            <svg className="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="currentColor"><path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.7 60.7 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337a50 50 0 0 0-9.902 3.912l-.003.002l-.34.18a.75.75 0 0 1-.707 0A51 51 0 0 0 7.5 12.173v-.224a.36.36 0 0 1 .172-.311a55 55 0 0 1 4.653-2.52a.75.75 0 0 0-.65-1.352a56 56 0 0 0-4.78 2.589a1.86 1.86 0 0 0-.859 1.228a50 50 0 0 0-4.634-1.527a.75.75 0 0 1-.231-1.337A60.7 60.7 0 0 1 11.7 2.805" /><path d="M13.06 15.473a48.5 48.5 0 0 1 7.666-3.282q.202 2.122.255 4.284a.75.75 0 0 1-.46.711a48 48 0 0 0-8.105 4.342a.75.75 0 0 1-.832 0a48 48 0 0 0-8.104-4.342a.75.75 0 0 1-.461-.71q.053-2.163.255-4.286q1.382.456 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11q.678.32 1.346.66a6.7 6.7 0 0 0 .551-1.607a1.5 1.5 0 0 0 .14-2.67v-.645a49 49 0 0 1 3.44 1.667a2.25 2.25 0 0 0 2.12 0" /><path d="M4.462 19.462c.42-.419.753-.89 1-1.395q.68.321 1.347.662a6.7 6.7 0 0 1-1.286 1.794a.75.75 0 0 1-1.06-1.06" /></g></svg>
        ),
        achievement: (
            <svg className="w-6 h-6 text-primary " xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M5.166 2.621v.858q-1.553.223-3.071.543a.75.75 0 0 0-.584.859a6.75 6.75 0 0 0 6.138 5.6a6.7 6.7 0 0 0 2.743 1.346A6.7 6.7 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75a2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.7 6.7 0 0 1-1.112-3.173a6.7 6.7 0 0 0 2.743-1.347a6.75 6.75 0 0 0 6.139-5.6a.75.75 0 0 0-.585-.858a47 47 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744a49 49 0 0 0-6.093-.377q-3.096.002-6.093.377a.75.75 0 0 0-.657.744m0 2.629c0 1.196.312 2.32.857 3.294A5.27 5.27 0 0 1 3.16 5.337a46 46 0 0 1 2.006-.343zm13.5 0v-.256q1.011.15 2.006.343a5.27 5.27 0 0 1-2.863 3.207a6.7 6.7 0 0 0 .857-3.294" clip-rule="evenodd" /></svg>
        )
    };
    const [currentPosition, setCurrentPosition] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPosition((prev) => (prev + 1) % positions.length);
        }, 1500);

        return () => clearInterval(interval);
    }, [positions.length]);

    return (
        <div className={`${theme}`}>
            <div
                className={` lg:h-screen bg-center flex px-8 lg:px-16 flex-col-reverse lg:flex-row `}
                style={{ backgroundImage: 'url("/svg/backround-seewet.svg")' }}
            >
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

                <div className="flex items-center w-full ">
                    <div className="flex-grow h-1 rounded-full background-primary"></div>
                    <h2 className="mx-4 font-bold text-primary">My SKill</h2>
                    <div className="flex-grow h-1 rounded-full background-primary"></div>
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
            <div className="flex items-center w-full px-8 lg:px-16">
                <div className="flex-grow h-1 rounded-full background-primary"></div>
                <h2 className="mx-4 font-bold text-primary">My Experience</h2>
                <div className="flex-grow h-1 rounded-full background-primary"></div>
            </div>
            <br />
            <p className="font-medium text-center px-8 lg:px-16">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s s
            </p>
            <br />

            <div className={`${theme} relative w-full max-w-6xl mx-auto p-6 `}>
                {/* Vertical Line */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 background-secondary hidden md:block"></div>

                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                            } mb-12`}
                    >
                        {/* Card Section */}
                        <div className="flex-1 flex flex-col items-center md:items-start px-4">
                            <div className="border border-gray-300 rounded-lg shadow-lg p-6 background-default w-full max-w-md">
                                <div className="flex items-center mb-4">
                                    <div className="mr-4">{typeIcons[exp.type]}</div>
                                    <div>
                                        <h5 className="font-bold text-primary">{exp.title}</h5>
                                        <h6 className="text-sm text-secondary">{exp.company}</h6>
                                    </div>
                                </div>
                                <p className="text-gray-700 mb-4">{exp.description}</p>
                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        className="px-4 py-2 text-sm font-medium button-on background-secondary rounded-full"
                                    >
                                        Detail
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Connector Section */}
                        <div className="hidden md:flex flex-col items-center">
                            <div className="h-4 w-4 rounded-full background-primary"></div>
                            <div className="w-1 h-full background-default"></div>
                        </div>

                        {/* Year Section */}
                        <div className="flex flex-col items-center justify-center md:items-center flex-1 px-4">
                            <div className="text-lg font-semibold text-gray-800 md:text-center">
                                {exp.year}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LandingPage;
