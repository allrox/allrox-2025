export default function Button (props){
    return(
        <button className="my-4 py-3 px-8 text-lg bg-yellow-500 text-black rounded-2xl font-medium">
        {props.icon && <i className={`${props.icon} me-2`}/>}
        {props.children}</button>
    )
}