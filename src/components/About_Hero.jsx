function Hero() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <p className="text-gray-600 text-sm font-semibold mb-4">About us</p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          <div>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Our designs solve problems
            </h1>

            <p className="text-gray-600 mt-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="flex justify-center">
            <img 
              src="https://placehold.co/400x300?text=Team"
              alt="Team working on design" 
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
