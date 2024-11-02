import Badge from '../Badge';
import H2Title from '../H2Title';

export default function GlowingSection({ title, badge, image, children }) {
    return (
        <div className="flex flex-col items-start border-solid border-2 border-white/[.05] rounded-xl p-8 md:p-16 bg-gradient-to-b from-white/[.07] to-white/[.01] hover:bg-[#005ba55e] hover:border-sky-400 hover:shadow-[0_0_20px_0_rgba(21,170,255,0.5)]">
            {image &&
                <img src={image} className="h-80 mx-auto" />}
            {badge && <Badge text={badge} />}
            <H2Title>{title}</H2Title>
            {children}
        </div>
    )
}