export default function Button({children,onClick,className}) {
    return(
        <button onClick={onClick} className={`${className ? className : "bg-blue-500"}  px-8 py-4 rounded-full font-bold text-xs hover:opacity-50 active:scale-95 transition-all`}>{children}</button>
    )
}