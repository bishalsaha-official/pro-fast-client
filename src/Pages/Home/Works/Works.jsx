import booking from '../../../assets/bookingIcon.png'

const Works = () => {

    return (
        <section className="py-10">
            <div className="max-w-6xl mx-auto">

                {/* Title */}
                <h2 className="text-3xl font-bold text-[#03373D] mb-10 text-left">How It Works</h2>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* Card 1 */}
                    <div className="card bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition">
                        <figure className="flex">
                            <img src={booking} alt="Booking Pick & Drop" className="w-16 h-16" />
                        </figure>
                        <div className="card-body text-center p-3">
                            <h3 className="font-semibold text-lg">Booking Pick & Drop</h3>
                            <p className="text-sm opacity-70">Schedule quick and easy pickup and delivery from your doorstep.</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="card bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition">
                        <figure className="flex">
                            <img src={booking} alt="Cash On Delivery" className="w-16 h-16" />
                        </figure>
                        <div className="card-body text-center p-3">
                            <h3 className="font-semibold text-lg">Cash On Delivery</h3>
                            <p className="text-sm opacity-70">Deliver products and securely collect payments at the customer’s door.</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="card bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition">
                        <figure className="flex">
                            <img src={booking} alt="Delivery Hub" className="w-16 h-16" />
                        </figure>
                        <div className="card-body text-center p-3">
                            <h3 className="font-semibold text-lg">Delivery Hub</h3>
                            <p className="text-sm opacity-70">Your parcels go through safe and efficient processing hubs.</p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="card bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition">
                        <figure className="flex">
                            <img src={booking} alt="Booking SME & Corporate" className="w-16 h-16" />
                        </figure>
                        <div className="card-body text-center p-3">
                            <h3 className="font-semibold text-lg">Booking SME & Corporate</h3>
                            <p className="text-sm opacity-70">Smart logistics services crafted for businesses and corporates.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Works;