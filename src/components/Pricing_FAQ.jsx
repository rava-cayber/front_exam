import { useState } from "react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      id: 1,
      question: "How much time does it take ?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      question: "What is your class naming convention ?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 3,
      question: "How do we communicate ?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 4,
      question: "I have a bigger project. Can you handle it ?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 5,
      question: "What is your class naming convention ?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-[#1C1E53] mb-8">
              Frequently <br /> asked questions
            </h2>
            <a href="#contact" className="text-blue-600 font-semibold hover:underline">
              Contact us For More Info
            </a>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.id} className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex justify-between items-start gap-4 py-4 focus:outline-none"
                >
                  <div className="flex items-start gap-4 text-left flex-1">
                    <span className="text-purple-600 font-bold text-lg min-w-fit">
                      {String(faq.id).padStart(2, "0")}   
                    </span>
                    <h3 className="text-gray-900 font-semibold text-lg">
                      {faq.question}
                    </h3>
                  </div>
                  <span className="text-2xl text-gray-400 min-w-fit">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="pl-12 pb-4 text-gray-600 text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
