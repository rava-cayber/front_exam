import Home_Footer from "../components/Home_Footer";

function Contact() {
  return (
    <>
      <div className="min-h-screen bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
            <p className="text-gray-500 mt-4 max-w-md mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-gray-50 rounded-2xl shadow-sm px-10 py-10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message sent!");
              }}
              className="space-y-6"
            >
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1C1E53]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1C1E53]"
                  />
                </div>
              </div>

              {/* Subject text + Subject select */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Provide context"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1C1E53]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm bg-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1C1E53]">
                    <option value="">Select Subject</option>
                    <option value="design">Design</option>
                    <option value="development">Development</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Write your question here"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1C1E53] resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="bg-[#1C1E53] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#2a2d6e] transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>

      <Home_Footer />
    </>
  );
}

export default Contact;
