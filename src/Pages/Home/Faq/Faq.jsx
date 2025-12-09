import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

export default function FAQ() {
    const faqs = [
        {
            q: "How does this posture corrector work?",
            a: "Our posture corrector gently aligns your spine and shoulders. It helps train your muscles to maintain proper posture.",
        },
        {
            q: "Is it suitable for all ages and body types?",
            a: "Yes! It is adjustable and designed to fit different ages, sizes, and body types comfortably.",
        },
        {
            q: "Does it really help with back pain and posture improvement?",
            a: "Regular use supports your spine, reduces strain, and can significantly improve posture and reduce discomfort.",
        },
        {
            q: "Does it have smart features like vibration alerts?",
            a: "Yes, the smart version includes vibration reminders when a user slouches for too long.",
        },
        {
            q: "How will I be notified when the product is back in stock?",
            a: "You can subscribe to restock alerts using email or phone number—we’ll notify you instantly.",
        },
    ];

    return (
        <section className="py-16" id="faq">
            <div className="max-w-10/12 mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl text-[#03373D] md:text-4xl font-bold mb-4">
                        Frequently Asked Question (FAQ)
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
                        Achieve proper alignment, reduce pain, and strengthen your body with ease!
                    </p>
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {
                        faqs.map((item, index) => (
                            <div
                                key={index}
                                className="collapse p-5 collapse-plus bg-white rounded-xl shadow-sm"
                            >
                                <input type="checkbox" />
                                <div className="collapse-title text-lg font-semibold">
                                    {item.q}
                                </div>
                                <div className="collapse-content text-gray-600">
                                    <p>{item.a}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* Button */}
                <div className="text-center mt-10">
                    <Link className="flex items-center justify-center gap-1.5">
                        <button className="btn btn-primary p-7 rounded-2xl text-[#1F1F1F] font-bold text-2xl">
                            See More FAQ
                        </button>
                        <button  className="p-5 bg-[#1F1F1F] rounded-full text-primary"><FaArrowRight size={18} /></button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
