import React from "react"
import '../App.css'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
        <section className="bg-amber-300">
       <nav aria-label="Site Nav" className="mx-auto flex max-w-6xl items-center justify-between p-4">
  <a href="/" className="mx-16 inline-flex h-10 w-10 items-center justify-center rounded-lg font-bold text-3xl text-white">
    JOBSKU
  </a>
  <ul className="flex items-center gap-2 text-base text-white font-bold mx-15">
    <li className="hidden lg:block">
      <a className="rounded-lg px-3 py-2" href="/"> Home </a>
    </li>
    <li><a className="rounded-lg px-3 py-2" href> About </a></li>
    <li>
    <Link to="/lowongan"><a className="inline-flex items-center gap-2 rounded-lg px-3 py-2">
        Lowongan
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a></Link>
    </li>
  </ul>
</nav></section>



        {/* <section className="bg-amber-300">
      <div className="navbar base-300 container flex justify-between h-16 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to="/">Beranda</Link></li>
    <li><Link to="/lowongan">Lowongan</Link></li>
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost normal-case text-xl ">JobsKU</Link>
  </div>
  <div className="navbar-end hidden lg:flex mx-20">
    <ul className="menu menu-horizontal p-0">
    <li><Link to="/">Beranda</Link></li>
    <li><Link to="/lowongan">Lowongan</Link></li>
    </ul>
  </div>
</div>
</section> */}
</>

)
}

export default Navbar