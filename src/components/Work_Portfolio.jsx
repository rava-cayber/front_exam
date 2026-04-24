import { useState } from "react";

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const portfolioItems = [
    {
      id: 1,
      title: "Template 1",
      category: "UI Design",
      image: "/Template1.png",
      description:
        "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
    },
    {
      id: 2,
      title: "Template 2",
      category: "Webflow Design",
      image: "/Template2.png",
      description:
        "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
    },
    {
      id: 3,
      title: "Template 3",
      category: "Figma Design",
      image: "/Template3.png",
      description:
        "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
    },
    {
      id: 4,
      title: "Template 4",
      category: "UI Design",
      image: "/Template4.png",
      description:
        "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
    },
    {
      id: 5,
      title: "Template 5",
      category: "Webflow Design",
      image: "/Template5.png",
      description:
        "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
    },
    {
      id: 6,
      title: "Template 6",
      category: "Figma Design",
      image: "/Template6.png",
      description:
        "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
    },
  ];

  const filters = ["All", "UI Design", "Webflow Design", "Figma Design"];

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-[#FFC83C] font-semibold uppercase tracking-wide mb-2">
            What we created
          </p>
          <h2 className="text-5xl font-bold text-[#1C1E53] mb-6">
            Our Work Portfolio
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto justify-center text-center">
            We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible.
          </p>
        </div>

        <div className="mt-6 flex justify-center">
          <img src="/Group 1987.png" alt="social media icons" className="h-8" />
        </div>

        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                activeFilter === filter
                  ? "bg-[#1C1E53] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {filteredItems.map((item) => (
            <div key={item.id}>

              <div className="relative overflow-hidden rounded-lg mb-6 bg-gray-200 h-64">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-[#1C1E53] mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {item.description}
              </p>

              <div className="flex gap-4">
                {item.id <= 2 && (
                  <a
                    href="#"
                    className="text-[#1C1E53] font-semibold hover:text-[#FFC83C] transition"
                  >
                    View Portfolio →
                  </a>
                )}
                <a
                  href="#"
                  className="text-[#1C1E53] font-semibold hover:text-[#FFC83C] transition"
                >
                  Read Case Study →
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center py-16 bg-gray-50 rounded-lg">
          <h2 className="text-4xl font-bold text-[#1C1E53] mb-6">
            Let's build something great together
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Nullam vitae ex in urna mollis sollicitudin. Morbi nulla purus, ultricies nec dolor sit amet, consectetur semper purus.
          </p>
          <button className="bg-[#FFC83C] hover:bg-yellow-400 text-black font-semibold py-3 px-8 rounded-full transition">
            Contact Us
          </button>
        </div>

      </div>
    </div>
  );
}

export default Portfolio;
