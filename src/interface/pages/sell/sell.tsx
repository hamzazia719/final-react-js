import React, { useState, useEffect } from "react";

const PropertyForm: React.FC = () => {
  const [price, setPrice] = useState<number | "">(0);
  const [bed, setBed] = useState<number | "">(0);
  const [bath, setBath] = useState<number | "">(0);
  const [sqft, setSqft] = useState<number | "">(0);
  const [address, setAddress] = useState<string>("");
  const [photo, setPhoto] = useState<File | null>(null);

  useEffect(() => {
    // Retrieve data from local storage when the component mounts
    const storedData = localStorage.getItem("propertyData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setPrice(parsedData.price);
      setBed(parsedData.bed);
      setBath(parsedData.bath);
      setSqft(parsedData.sqft);
      setAddress(parsedData.address);
      // Note: You cannot directly set a File object retrieved from local storage
      // Instead, show a placeholder or some indication that a photo was uploaded
      setPhoto(null); // Reset or handle accordingly
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Convert form data to an object
    const formData = {
      price,
      bed,
      bath,
      sqft,
      address,
      photo: photo?.name || "No photo",
    };

    // Store the form data in localStorage
    localStorage.setItem("propertyData", JSON.stringify(formData));

    // Reset state values to clear the inputs
    setPrice(0);
    setBed(0);
    setBath(0);
    setSqft(0);
    setAddress("");
    setPhoto(null);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Price */}
        <div>
          <label
            htmlFor="price"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Price
          </label>
          <input
            id="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(parseInt(e.target.value))}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        {/* Bed */}
        <div>
          <label
            htmlFor="bed"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Bed
          </label>
          <input
            id="bed"
            type="number"
            value={bed}
            onChange={(e) => setBed(parseInt(e.target.value))}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        {/* Bath */}
        <div>
          <label
            htmlFor="bath"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Bath
          </label>
          <input
            id="bath"
            type="number"
            value={bath}
            onChange={(e) => setBath(parseInt(e.target.value))}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        {/* Sqft */}
        <div>
          <label
            htmlFor="sqft"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Sqft
          </label>
          <input
            id="sqft"
            type="number"
            value={sqft}
            onChange={(e) => setSqft(parseInt(e.target.value))}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        {/* Address */}
        <div>
          <label
            htmlFor="address"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Address
          </label>
          <input
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        {/* Photo */}
        <div>
          <label
            htmlFor="photo"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Photo
          </label>
          <input
            id="photo"
            type="file"
            accept="image/*"
            onChange={(e) =>
              setPhoto(e.target.files ? e.target.files[0] : null)
            }
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        {/* Submit button */}
        <div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PropertyForm;
