function Testimonials() {
  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        <div>
          <h2 className="text-3xl font-bold">
            What our clients say about us
          </h2>
          <p className="text-gray-500 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium">
            "The best agency we've worked with so far. They understand our product and are able to add new features with a great focus."
          </p>

          <div className="flex items-center gap-4 mt-6">
            <img src="/Rasm.png" alt="rasm" />
            <div>
              <p className="font-semibold">Jenny Wilson</p>
              <p className="text-sm text-gray-500">Vice President</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Testimonials;
