import { Outlet } from "react-router";
import authImg from '../assets/authImage.png'
import ProFastLogo from "../Shared/ProFastLogo/ProFastLogo";

const AuthLayouts = () => {
    return (
        <div className="bg-base-200 max-w-10/12 mx-auto p-10">
            <div>
                <ProFastLogo></ProFastLogo>
            </div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1">
                    <img
                        src={authImg}
                        alt="Authentication"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default AuthLayouts;