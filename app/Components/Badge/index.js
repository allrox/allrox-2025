export default function Badge({text}) {
    return (
        <div className="text-sm flex-grow-0 text-white border-solid border-[1px] border-white py-0 px-3 rounded-xl mb-4 hover:text-black hover:border-[#00d9ff] hover:bg-[#00d9ff]">{text}</div>
    )
}
