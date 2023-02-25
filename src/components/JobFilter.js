import React from "react";

function JobFilter () {
    return (
        <>
        <section className="flex justify-center mt-10 px-5">
       <div className="flex flex-col md:flex-row flex-wrap w-full md:w-2/3 bg-white gap-5 justify-center">

    <input type="text" placeholder="Cari pekerjaan" className="px-8 py-3 rounded-md bg-white border-solid border-2 border-amber-300 text-sm" />
  
  <input type="text" placeholder="Lokasi pekerjaan" className="px-8 py-3 rounded-md bg-white border-solid border-2 border-amber-300 text-sm" />
  <input type="text" placeholder="Kategori pekerjaan" className="px-8 py-3 rounded-md bg-white border-solid border-2 border-amber-300 text-sm" />

    <button className="px-4 py-2 bg-amber-300 hover:bg-amber-400 text-white text-sm font-medium rounded-md">
      Reset Filter
    </button>
  </div>
</section>

        </>
    )
}

export default JobFilter