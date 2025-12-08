import trackingImg from "../../../assets/live-tracking.png";
import safeImg from "../../../assets/safe-delivery.png";
import supportImg from "../../../assets/safe-delivery.png";

const Features = () => {
    const cards = [
        {
            img: trackingImg,
            title: "Live Parcel Tracking",
            desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
        },
        {
            img: safeImg,
            title: "100% Safe Delivery",
            desc: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
        },
        {
            img: supportImg,
            title: "24/7 Call Center Support",
            desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
        },
    ];

    return (
        <section className="max-w-10/12 mx-auto py-16 my-10 border-t border-b border-dashed border-[#1E1E1E]">
            <div className="px-4 space-y-8">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row items-center gap-6 bg-white shadow-lg p-10 rounded-4xl hover:shadow-2xl transition"
                    >
                        <img
                            src={card.img}
                            alt={card.title}
                            className="w-3xs h-40 object-contain"
                        />


                        <div>
                            <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{card.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;