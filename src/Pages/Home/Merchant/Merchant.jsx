import merchant from '../../../assets/location-merchant.png'

const Merchant = () => {
    return (
        <div className="hero bg-[url('assets/be-a-merchant-bg.png')] bg-no-repeat bg-center py-20 my-20 rounded-4xl bg-[#03373D]">
            <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                <img
                    src={merchant}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl text-white font-bold">Merchant and Customer Satisfaction is Our First Priority</h1>
                    <p className="py-6 text-white">
                        We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
                    </p>
                    <div className='flex gap-5 mt-5'>
                        <button className="btn rounded-full p-7 btn-primary text-[#1F1F1F] text-2xl font-bold">Become a Merchant</button>
                        <button className="btn btn-outline rounded-full p-7 text-2xl text-[#CAEB66] font-bold">Earn with Profast Courier</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Merchant;