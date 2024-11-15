import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

const LandingPage = () => {
    const theme = useSelector((state: RootState) => state.themeChange.Theme);

    const positions = [
        "Full-Stack Developer",
        "Web Developer",
        "Mobile Developer",
        "Back-End Developer",
        "Software Developer",
    ];

    const socialMedia = [
        '/svg/instagram.svg',
        '/svg/gmail.svg',
        '/svg/linkedin.svg',
        '/svg/shop.svg',
        '/svg/tiktok.svg',
        '/svg/telegram.svg',
        '/svg/website.svg',
        '/svg/whatsapp.svg',
        '/svg/youtube.svg',
    ]

    const [currentPosition, setCurrentPosition] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPosition((prev) => (prev + 1) % positions.length);
        }, 1500); // Ubah teks setiap 1 detik

        return () => clearInterval(interval); // Bersihkan interval ketika komponen dibersihkan
    }, [positions.length]);

    return (
        <>
            <div className={`${theme} h-screen bg-center flex px-16 flex-col lg:flex-row`}>
                <div className="flex flex-col w-full lg:w-7/12 items-start justify-center ">
                    <h4 className="text-primary">Welcome</h4>
                    <h1>
                        I'm <span className="typing-effect text-primary">{positions[currentPosition]}</span>
                    </h1>
                    <br />
                    <p className="font-medium">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s s
                    </p>
                    <br />
                    <div className="flex gap-4">
                        {socialMedia.map((icon, index) => (
                            <div
                                key={index}
                                className="relative group w-10 h-10 p-2 flex items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 ease-in-out hover:shadow-primary hover:scale-105"
                            >
                                <img src={icon} alt="social-icon" className="w-6 h-6 group-hover:text-primary transition-all " />
                                <div className="absolute inset-0 group-hover:bg-primary opacity-0 group-hover:opacity-50 rounded-full transition-all"></div>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="flex w-full lg:w-5/12 items-center justify-center p-1 bg-green-500">
                    {/* Kolom kedua */}
                    <h2 className="text-white">Kolom 2</h2>
                    {/* Konten lainnya */}
                </div>
            </div>
            <div className="h-screen">
                {/* Konten lainnya */}
            </div>
        </>
    );
};

export default LandingPage;
