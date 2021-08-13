import React from "react"
import './header.scss'
interface HeaderProps{
    title: string
}

export const Header = (props:HeaderProps) => {
    return(
        <div className="header">
            <h1>{props.title}</h1>
            <div className="mode">
            <i className="far fa-moon"></i><p>Dark Mode</p>
            </div>  
        </div>
    )
}

// export const Header: React.FC<HeaderProps> () => {
//     return(
//         <div className="header">
//             <h1></h1>
//             <div className="mode">
//             <i className="far fa-moon"></i><p>Dark Mode</p>
//             </div>  
//         </div>
//     );
// }