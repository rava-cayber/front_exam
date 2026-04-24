function Pricing() {
  const plans = [
    {
      id: 1,
      price: "$299",
      period: "Per Design",
      title: "Landing Page",
      description: "When you're ready to go beyond prototyping in Figma, WebFlow's ready to help.",
      features: [
        "All limited links",
        "Own analytics platform",
        "Chat support",
        "Optimize hashtags",
        "Unlimited users"
      ],
      button: "Get started",
      buttonStyle: "bg-[#1C1E53] text-white hover:bg-[#2D2E5F]",
      isHighlighted: false
    },
    {
      id: 2,
      price: "$399",
      period: "Full Design",
      title: "Website Page",
      description: "When you're ready to go beyond prototyping in Figma, WebFlow's ready to help.",
      features: [
        "All limited links",
        "Own analytics platform",
        "Chat support",
        "Optimize hashtags",
        "Unlimited users"
      ],
      button: "Get started",
      buttonStyle: "bg-yellow-400 text-black hover:bg-yellow-500",
      isHighlighted: true
    },
    {
      id: 3,
      price: "$499",
      period: "Per Design",
      title: "Complex Project",
      description: "When you're ready to go beyond prototyping in Figma, WebFlow's ready to help.",
      features: [
        "All limited links",
        "Own analytics platform",
        "Chat support",
        "Optimize hashtags",
        "Unlimited users",
        "Asset and help"
      ],
      button: "Contact us",
      buttonStyle: "bg-[#1C1E53] text-white hover:bg-[#2D2E5F]",
      isHighlighted: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`p-8 rounded-lg transition transform hover:scale-105 ${
                plan.isHighlighted
                  ? "bg-[#1C1E53] text-white shadow-2xl"
                  : "bg-white text-gray-900 shadow-lg"
              }`}
            >
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className={`text-sm ${plan.isHighlighted ? "text-yellow-400" : "text-purple-600"}`}>
                  {plan.period}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>

              <p className={`text-sm mb-8 ${plan.isHighlighted ? "text-gray-300" : "text-gray-600"}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${plan.isHighlighted ? "bg-yellow-400" : "bg-green-500"}`}></span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-full font-semibold transition ${plan.buttonStyle}`}>
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
