import { useLoaderData } from "react-router";
import CoverageMap from "./CoverageMap";

const Coverage = () => {
    const serviceCenters = useLoaderData()

    return (
        <div className="bg-white my-10 rounded-4xl shadow-sm p-10">
            <h2 className="text-5xl mb-10 text-[#03373D] font-bold">We are available in 64 districts</h2>
            <CoverageMap serviceCenters={serviceCenters}></CoverageMap>
        </div>
    );
};

export default Coverage;