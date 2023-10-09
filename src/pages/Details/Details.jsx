import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const moreDetails = useLoaderData();
    
    const { id, } = useParams(); // Corrected to useParams()
    console.log(moreDetails, id);
    
    const serviceDetails = moreDetails.find(service => service.id === id); // Use triple equals (===) for strict equality check
    
    return (
        <div>
            <h1>hiiii {serviceDetails ? serviceDetails.length : 'Service not found'}</h1>

            <img src={serviceDetails} alt="" />
        </div>
    );
};

export default Details;
