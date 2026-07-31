    import { motion } from "framer-motion";

export default function Hero(){

return(

<section className="min-h-screen flex items-center">

<div className="container grid lg:grid-cols-2 gap-10">

<div>

<motion.h1

initial={{opacity:0,y:50}}

animate={{opacity:1,y:0}}

transition={{duration:1}}

className="text-7xl font-bold leading-tight"

>

Discover Luxury Living

</motion.h1>

<p className="mt-8 text-gray-300">

Find your dream home with premium architecture and modern comfort.

</p>

<div className="mt-10 flex gap-5">

<button className="bg-white text-black px-8 py-4 rounded-full">

Explore

</button>

<button className="border px-8 py-4 rounded-full">

Contact

</button>

</div>

</div>

<div>

<motion.img

initial={{opacity:0,scale:.8}}

animate={{opacity:1,scale:1}}

transition={{duration:1}}

src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200"

className="rounded-3xl shadow-2xl"

/>

</div>

</div>

</section>

)

}