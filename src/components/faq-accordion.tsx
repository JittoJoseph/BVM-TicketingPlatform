"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I register for an event individually?",
      answer:
        "To register by yourself, go to MakeMyPass, fill out the registration form, complete the payment, and your ticket will be sent to your email immediately.",
    },
    {
      question: "How do I register for an event as a team?",
      answer:
        "For team registration, visit MakeMyPass and start filling the form. After payment, you will receive a team registration URL in your email, which you can use to add team members. Each team member will receive their ticket in the mail upon being added.",
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-b border-white/10 pb-4 last:border-b-0"
        >
          <button
            onClick={() => toggle(index)}
            className="flex justify-between items-center w-full text-left font-medium text-white hover:text-white/80 transition-colors py-2 cursor-pointer"
          >
            <span>{faq.question}</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === index && (
            <p className="mt-2 text-white/75 leading-relaxed">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQAccordion;
