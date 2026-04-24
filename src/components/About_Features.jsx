function Features() {
  const teamMembers = [
    {
      id: 1,
      name: "John Smith",
      role: "CEO",
      image: "/image3.png"
    },
    {
      id: 2,
      name: "Simon Adams",
      role: "CTO",
      image: "/image4.png"
    },
    {
      id: 3,
      name: "Paul Jones",
      role: "Design Lead",
      image: "/image5.png"
    },
    {
      id: 4,
      name: "Sara Hardin",
      role: "Project Manager",
      image: "/image6.png"
    }
  ];

  return (
    <>
      {/* Goal & Continuous Improvement Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Goal focussed</h3>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Continuous improvement</h3>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <img 
              src="/image2.png" 
              alt="Features showcase" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Meet our team
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md"
                />
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
