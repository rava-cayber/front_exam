function Hero() {
  return (
    <div className="bg-[#1C1E53] text-white px-20 py-20">
      
      <div className="flex items-center justify-between">
        
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold leading-tight">
            Building stellar websites for early startups
          </h1>

          <p className="mt-6 text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="mt-8 flex items-center gap-6">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-medium">
              View our work
            </button>

            <button className="flex items-center gap-2">
              View Pricing →
            </button>
          </div>
        </div>

        <div>
          <img 
            src="/Illustration.svg"
            alt="hero"
            className="w-[500px]"
          />
        </div>

      </div>

    </div>
  );
}

export default Hero;
