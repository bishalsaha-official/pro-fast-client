import logo from '../../assets/logo.png'

const ProFastLogo = () => {
    return (
        <div className='flex items-end'>
            <img src={logo} alt="Pro Fast" />
            <p className='text-3xl'>ProFast</p>
        </div>
    );
};

export default ProFastLogo;