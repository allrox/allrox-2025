import Badge from '../Badge';
import H2Title from '../TitleTwo';

export default function GlowingSection({ title, badge, image, children, id }) {
    return (
        <section id={id} className="container justify-self-center w-fit pt-16 px-4">
            <div className="flex flex-col items-start border-solid border-2  rounded-xl p-8 md:p-16  bg-[#005ba55e] h-full border-sky-400 shadow-[0_0_40px_0_rgba(21,170,255,0.5)]">
                {image &&
                    <img src={image} className="h-80 mx-auto" />}
                {badge && <Badge text={badge} />}
                <H2Title>{title}</H2Title>
                {children}
            </div>
        </section>
    )
}

// border-white/[.05]  bg-gradient-to-b from-white/[.07] to-white/[.01]