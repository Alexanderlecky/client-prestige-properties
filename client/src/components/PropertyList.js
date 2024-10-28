import React, { useState, useEffect } from 'react';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  // Fetch the properties from the backend when the component mounts
  useEffect(() => {
    fetch('http://localhost:5000/properties') // Adjust URL if needed
      .then((response) => response.json())
      .then((data) => {
        setProperties(data); // Set the properties from the backend
      })
      .catch((error) => {
        console.error('Error fetching properties:', error);
      });
  }, []);

  return (
    <div className="property-list">
      {/* Display the properties */}
      {properties.map((property) => (
        <div key={property.id} className="property-item">
          <img
            src={property.image}
            alt={property.name}
            style={{ width: "300px", height: "200px", objectFit: "cover" }}
          />
          <h2>{property.name}</h2>
          <p>{property.location}</p>
          <p>{property.price.toLocaleString('en-KE', { style: 'currency', currency: 'KES' })}</p>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
