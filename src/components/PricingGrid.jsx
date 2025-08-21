import { useEffect, useState } from "react";
import PricingCard from "./PricingCard";

export default function PricingGrid() {
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        const API = import.meta.env.VITE_API_URL;
        fetch(`${API}/api/pricing`)
            .then((res) => res.json())
            .then((data) => setPlans(data))
            .catch((err) => console.error("Error fetching pricing:", err));
    }, []);

    return (
        <div className="container py-5">
            <div className="row justify-content-center  bg-dark g-4">
                {plans.map((plan, i) => (
                    <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center" key={i}>
                        <PricingCard plan={plan} />
                    </div>
                ))}
            </div>
        </div>
    );
}
