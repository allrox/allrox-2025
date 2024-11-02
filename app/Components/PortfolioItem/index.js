export default function PortfolioItem({ imgUrl, label, link }) {
    return (
        <div className="inline-flex flex-col items-center justify-center hover:scale-105">
            <a href={link} target="_blank" >
                <img src={imgUrl} alt={label} className="rounded-lg mb-2 border-solid border-[1px] 
            border-white/[.7]"/>
            </a>
            <p className="text-sm">{label}</p>
        </div>
    )
}