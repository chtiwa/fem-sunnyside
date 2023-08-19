const Sections = () => {
  return (
    <div className="flex flex-col w-[100%]">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="sm:bg-[url('/images/desktop/image-transform.jpg')] bg-[url('/images/mobile/image-transform.jpg')] object-cover bg-no-repeat bg-center h-[50vh]" />
        <div className="flex flex-col items-center justify-center gap-y-8 h-[50vh] px-8">
          <h1 className="text-3xl font-extrabold">Transform your brand</h1>
          <p className="text-md text-slate-600">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <span className="font-semibold text-xl shadow-yellow-200 shadow-sm hover:cursor-pointer">
            Lean more
          </span>
        </div>
      </div>

      <div className=" grid grid-cols-1  sm:grid-cols-2 ">
        <div className="flex flex-col items-center justify-center gap-y-8 h-[50vh] px-8">
          <h1 className="text-3xl font-extrabold">
            Stand out to the right audience
          </h1>
          <p className="text-md text-slate-600">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places
          </p>
          <span className="font-semibold text-xl shadow-yellow-200 shadow-sm hover:cursor-pointer">
            Lean more
          </span>
        </div>
        <div className="sm:bg-[url('/images/desktop/image-stand-out.jpg')] bg-[url('/images/mobile/image-stand-out.jpg')] object-cover bg-no-repeat bg-center h-[50vh]" />
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="relative sm:bg-[url('/images/desktop/image-graphic-design.jpg')] bg-[url('/images/mobile/image-graphic-design.jpg')] object-cover bg-no-repeat bg-top h-[70vh] md:h-[85vh]">
          <div className="flex flex-col gap-8 absolute top-[60%] left-[50%] translate-x-[-50%] h-[70vh] w-[100%] text-center px-8">
            <h1 className="text-4xl font-bold text-gray-700">Graphic design</h1>
            <p className="text-md text-slate-600">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential client's
              attention.
            </p>
          </div>
        </div>
        <div className="relative sm:bg-[url('/images/desktop/image-photography.jpg')] bg-[url('/images/mobile/image-photography.jpg')] object-cover bg-no-repeat bg-top h-[70vh] md:h-[85vh]">
          <div className="flex flex-col gap-8 absolute top-[60%] left-[50%] translate-x-[-50%] h-[70vh] w-[100%] text-center px-8">
            <h1 className="text-4xl font-bold text-white">Photography</h1>
            <p className="text-md text-white">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Sections
