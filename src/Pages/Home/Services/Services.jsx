import servicesIcon from "../../../assets/service.png"

const services = [
    {
        icon: servicesIcon,
        title: "Express & Standard Delivery",
        description:
            "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
        icon: servicesIcon,
        title: "Nationwide Delivery",
        description:
            "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
        icon: servicesIcon,
        title: "Fulfillment Solution",
        description:
            "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
        icon: servicesIcon,
        title: "Cash on Home Delivery",
        description:
            "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
        icon: servicesIcon,
        title: "Corporate Service / Contract In Logistics",
        description:
            "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
        icon: servicesIcon,
        title: "Parcel Return",
        description:
            "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
];

const Services = () => {
    return (
        <section className="py-16 my-10 rounded-4xl bg-[#03373D]" id="services">
            <div className="max-w-10/12 mx-auto px-4 text-center">
                <h2 className="text-4xl text-white font-bold mb-4">Our Services</h2>
                <p className="text-white max-w-2xl mx-auto mb-12">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                </p>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="card bg-white rounded-2xl shadow-xl p-10  hover:shadow-2xl hover:bg-[#CAEB66] transition-all"
                        >
                            <img
                                src={service.icon}
                                alt={service.title}
                                className="w-16 h-16 mx-auto mb-4"
                            />
                            <h3 className="text-2xl font-bold text-[#03373D] mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;