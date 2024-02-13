import { Link } from "react-router-dom"
import video from '../videos/amuz.mp4'
export default function Home(){
    return (
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <video autoPlay loop muted>
                <source src= {video} type='video/mp4'/>
            </video>
            <div>
                <h1 className="absolute top-1/2 -translate-y-1/2">Welcome!</h1>
            </div>
        </div>
    )
}