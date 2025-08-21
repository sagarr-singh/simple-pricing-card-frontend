import { CheckCircleFill } from "react-bootstrap-icons";

export default function PricingCard({ plan }) {
    return (
        <div className="card shadow-lg border-2 border-danger rounded-4 text-center text-white bg-dark position-relative mx-auto" style={{ maxWidth: "850px" }}>
          
            {plan.badge && (
                <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger px-3 py-2">
                    {plan.badge}
                </span>
            )}

            <div className="card-body">
                <h2 className="card-title fs-1 fw-bold">
                    ${plan.price}
                    <span className="fs-5">/mo</span>
                </h2>
                <p className="">{plan.subtitle}</p>

                <ul className="list-unstyled text-start mt-4">
                    {plan.features.map((feature, i) => (
                        <li key={i} className="d-flex align-items-center mb-2 text-light">
                            <CheckCircleFill className="text-success me-2" size={20} />
                            {feature}
                        </li>
                    ))}
                </ul>

                {plan.comingSoon && (
                    <div className="mt-3">
                        <small className="mr-5 flex-start text-uppercase">Coming Soon</small>
                        <p className="mb-0">{plan.comingSoon}</p>
                    </div>
                )}

                <button className="btn btn-primary w-100 mt-4 fw-semibold">
                    {plan.buttonText || "Signup Now"}
                </button>
                {plan.footer && (
                    <p className="mt-3 small">{plan.footer}</p>
                )}
            </div>
        </div>
    );
}
