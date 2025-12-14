import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useState } from "react";

// Fix Leaflet marker icons in React

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const bangladeshCenter = [23.685, 90.3563];

// Helper component to zoom map when search matches
const FlyToLocation = ({ position }) => {
    const map = useMap();

    if (position) {
        map.flyTo(position, 11, { duration: 1.5 });
    }

    return null;
};

const CoverageMap = ({ serviceCenters }) => {
    const [search, setSearch] = useState("");

    // Find first matching district by covered area
    const matchedCenter = serviceCenters.find(
        (center) =>
            center.status === "active" &&
            center.covered_area.some((area) =>
                area.toLowerCase().includes(search.toLowerCase())
            )
    );

    // Filter markers when searching
    const filteredCenters = search
        ? serviceCenters.filter((center) =>
            center.covered_area.some((area) =>
                area.toLowerCase().includes(search.toLowerCase())
            )
        )
        : serviceCenters;

    return (
        <div className="w-full rounded-xl shadow p-4">
            {/* Search Box */}
            <div className="mb-4 flex justify-center">
                <input
                    type="text"
                    placeholder="Search covered area (e.g. Uttara, Dhanmondi)"
                    className="input input-bordered w-full max-w-md"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* Map */}
            <div className="h-[500px] w-full rounded-xl overflow-hidden">
                <MapContainer
                    center={bangladeshCenter}
                    zoom={7}
                    scrollWheelZoom={false}
                    className="h-full w-full"
                >
                    <TileLayer
                        attribution="&copy; OpenStreetMap contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {/* Auto zoom when search matches */}
                    {matchedCenter && (
                        <FlyToLocation
                            position={[
                                matchedCenter.latitude,
                                matchedCenter.longitude,
                            ]}
                        />
                    )}

                    {/* Markers */}
                    {filteredCenters
                        .filter((center) => center.status === "active")
                        .map((center) => (
                            <Marker
                                key={center.district}
                                position={[center.latitude, center.longitude]}
                            >
                                <Popup>
                                    <div className="space-y-1">
                                        <h3 className="font-semibold text-base">
                                            {center.district}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            Region: {center.region}
                                        </p>
                                        <p className="text-sm">
                                            Covered areas: {center.covered_area.join(", ")}
                                        </p>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                </MapContainer>
            </div>
        </div>
    );
};

export default CoverageMap;
