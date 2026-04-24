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
              <a href="mailto:contact@website.com" className="text-sm hover:underline">
                contact@website.com
              </a>
            </div>

            <div>
              <p className="font-semibold">Call us</p>
              <a href="tel:+92766277285" className="text-sm hover:underline">
                0927 6277 28525
              </a>
            </div>

          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold">Lets Talk!</h2>

          <p className="text-gray-300 mt-4 max-w-md">
            We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.
          </p>

          <div className="mt-6 flex gap-4">
            <a href="#" className="hover:opacity-70 transition">
              <img src="/SocialMediIcon.png" alt="social icons" className="w-32" />
            </a>
          </div>

        </div>

      </div>

      <div className="mt-16 border-t border-gray-600 pt-8">
        <p className="text-center text-gray-400 text-sm">
          © 2024 Finsweet. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
