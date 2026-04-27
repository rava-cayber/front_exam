function Footer() {
  return (
    <div className="bg-[#1C1E53] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        
        <div>
          <h1 className="text-2xl font-bold">{`{Finsweet}`}</h1>

          <p className="text-gray-300 mt-4 max-w-sm">
            We are always open to discuss your project and improve your online presence.
          </p>

          <div className="mt-8 bg-yellow-300 text-black p-6 flex gap-10 max-w-md">
            
            <div>
              <p className="font-semibold">Email me at</p>
              <p className="text-sm">contact@website.com</p>
            </div>

            <div>
              <p className="font-semibold">Call us</p>
              <p className="text-sm">0927 6277 28525</p>
            </div>

          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold">Lets Talk!</h2>

          <p className="text-gray-300 mt-4 max-w-md">
            We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.
          </p>

          <div className="mt-6">
            <img
              src="https://placehold.co/128x32?text=Socials"
              alt="social icons"
              className="w-32"
            />
          </div>

        </div>

      </div>
    </div>
  );
}

export default Footer;
