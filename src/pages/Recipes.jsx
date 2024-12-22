import React, { useState, useEffect } from "react";

const Products = () => {
  const [cakes, setCakes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to shuffle an array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    const fetchCakes = async () => {
      try {
        // Fetching data from the new API (recipes)
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();

        // Transforming data into a usable format for cakes
        const shuffledCakes = shuffleArray(
          data.recipes.map((recipe, index) => ({
            id: index + 1,
            title: recipe.name,
            link: recipe.url,  // Fake link to the recipe's webpage
          }))
        );
        setCakes(shuffledCakes);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cakes:", error);
        setLoading(false);
      }
    };

    fetchCakes();
  }, []);

   if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-4xl text-black font-[Poppins]">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-screen h-full bg-rose-100 p-16 space-y-3 bg-rose-100 flex flex-col items-center justify-center">
     <p className="text-1xl font-[Poppins] font-medium text-rose-950 text-center">
        Our Cake Selection
    </p>


      <p className="text-2xl font-[Poppins] font-light tracking-widest text-center mt-10">
        "Indulge in our heavenly creations! Order your favorites now."
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 p-4">
        {cakes.map((cake) => (
          <div
            key={cake.id}
            className="p-6 flex flex-col justify-between items-start border border-black rounded shadow-md"
            style={{
              height: "320px", // Ensures uniform height
              minWidth: "250px", // Optional: Adjust minimum width
            }}
          >
            <h2 className="text-2xl font-[Poppins] font-medium text-justify uppercase mb-2">
              {cake.title}
            </h2>
            <p
              className="text-base text-black font-[Poppins] overflow-hidden mb-4"
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
                lineHeight: "1.5em",
                maxHeight: "3em",
              }}
            >
              Indulge in the delicious taste of {cake.title}. A perfect treat for every occasion!
            </p>
            <a
              href={cake.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn2 w-full text-center py-2 px-4 bg-rose-600 text-white font-medium rounded"
            >
              Order Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
