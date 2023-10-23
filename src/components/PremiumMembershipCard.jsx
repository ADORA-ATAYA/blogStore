import React from "react";

const PremiumMembershipCard = ({ title, price, features, imageUrl }) => {
  return (
    <div className="max-w-md mx-4 my-4 rounded-lg shadow-lg  bg-white">
      <div className="relative">
        <img src={imageUrl} alt="Card" className="w-full h-auto" />
        <div className="absolute top-0 right-0 mt-2 mr-2">
          <div className="p-2 bg-orange-600 text-white rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="px-6 py-4">
        <h1 className="text-2xl font-bold text-black mb-2">{title}</h1>
        <p className="text-gray-600">Price: ${price}</p>
        <ul className="mt-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <svg
                className="w-4 h-4 fill-current text-green-400 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M4 10.857a6.032 6.032 0 0 0 2 4.57v4.573L10 15.42l4-4.57v4.572a6.032 6.032 0 0 0 2-4.57 6 6 0 1 0-12 0z" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="px-6 py-4">
        <button className="w-full py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default PremiumMembershipCard;
