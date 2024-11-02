import { useState } from "react";

export default function FeatureCard({ text, image, hover }) {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="flex flex-col items-center justify-center border-solid border-2 border-white/[.05] h-[180px] rounded-2xl gap-2 bg-gradient-to-bl from-white/[.07] to-white/[.01] hover:bg-[#36C6FF] hover:border-[#B3EEFF] hover:shadow-lg hover:shadow-[0_0_20px_0_rgba(21,170,255,0.5)] p-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={image}
                className={`w-12 ${isHovered ? "hidden" : "block"}`}
            />
            <p
                id="textoPadrao"
                className={`text-white m-0 text-center text-sm ${isHovered ? "hidden" : "block"}`}
            >
                {text}
            </p>
            <p
                id="textoHover"
                className={`text-black m-0 text-center text-sm leading-none ${isHovered ? "block" : "hidden"
                    }`}
            >
                {hover}
            </p>
        </div>
    );
}