import video from '../videos/amuz.mp4'
export default function Home() {
    return (
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <video autoPlay loop muted>
                <source src= {video} type='video/mp4'/>
            </video>
            <div className="absolute top-1/2 -translate-y-1/2">
                <h1 className="text-left text-7xl font-extrabold">HELLO !</h1>
                <h2 className="text-left text-3xl font-semibold">I'M HYUNJU-JUNG.</h2>
            </div>
        </div>
    )
}