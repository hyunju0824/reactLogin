import video from '../videos/amuz.mp4'
export default function Home() {
    return (
        <div className="md:relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-24 md:my-auto">
            <video autoPlay loop muted>
                <source src= {video} type='video/mp4'/>
            </video>
            <div className="md:absolute top-1/2 -translate-y-1/2 mt-10 md:mt-0">
                <h1 className="md:text-left md:text-7xl text-4xl font-extrabold">HELLO !</h1>
                <h2 className="md:text-left md:text-3xl text-2xl font-semibold">I'M HYUNJU-JUNG.</h2>
            </div>
        </div>
    )
}