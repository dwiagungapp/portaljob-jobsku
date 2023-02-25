import React from "react";
import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <>
        <section className="bg-white text-gray-900">
	<div className="container flex flex-col justify-center p-20 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">Temukan
				<span className="text-amber-300"> pekerjaan</span> Anda
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Berbagai lowongan pekerjaan tersedia, lamar dan raihlah impian</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
			<Link to="/lowongan"><a rel="noopener noreferrer" className="px-8 py-3 text-lg font-semibold rounded bg-amber-300 text-white">Mulai sekarang</a></Link>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-amber-300">Info lainnya</a>
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="https://mambaui.com/assets/svg/Business_SVG.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
        </>
    )
}

export default Hero