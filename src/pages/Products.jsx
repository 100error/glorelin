const Menu = [
  { id: 1 , title:"Black Forest Cheesecake Delight", image: "/w.jpg"},
  { id: 2, title: "Red Velvet Oreo Cheesecake", image: "/b.jpg"},
  { id: 3, title: "Blueberry Chocolate Lavender Dream Cake", image: "/c.jpg"},
  { id: 4, title: "Salted Caramel Chocolate Cake", image: "/d.jpg"},
  { id: 5, title: "Ultimate Chocolate Strawberry Cheesecake", image: "/e.jpg"},
  { id: 6, title: "Chocolate espresso torte with espresso glaze", image: "/f.jpg"},
  { id: 7, title: "Black Forest gateau", image: "/g.jpg"},
  { id: 8, title: "Mint Chocolate Fudge Cheesecake Cake", image: "/t.jpg"},
  { id: 9, title: "Chocolate Peanut Butter Ice Cream Cake", image: "/i.jpg"},
  { id: 10, title: "Chocolate Orange Cheesecake Layer Cake", image: "/j.jpg"},
  { id: 11, title: "Chocolate Cheesecake Topped", image: "/k.jpg"},
  { id: 12, title: "Dark Romance Chocolate Blackberry Cake", image: "/l.jpg"},
  { id: 13, title: "Purple Velvet Oreo Cheesecake", image: "/u.jpg"},
  { id: 14, title: "Chocolate cake with strawberries", image: "/n.jpg"},
  { id: 15, title: "Chocolate Raspberry Cake", image: "/o.jpg"},
  { id: 16, title: "Dark Chocolate Covered Strawberry Cake", image: "/q.jpg"},
];

const Products = () => {
  return (
    <div className="w-screen h-full font-[Poppins] text-black bg-rose-200 flex flex-col items-center justify-center overflow-hidden pt-20 pb-20">
      <p className="text-1xl font-[Poppins] font-medium text-rose-950 text-center mt-16 bg-red-50 w-screen h-10 pb-10 pt-3">
        Log in to order our cakes
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-full max-h-full mb-10 px-4">
        {Menu.map((item, index) => (
          <div
            key={item.id}
            className="w-60 h-60 border border-rose-900 rounded-lg m-2 mt-16 mb-5"
          >
            <img
              src={item.image}
              className="w-full h-full object-cover rounded-lg shadow-md hover hover:border"
              alt={item.title}
            />
            <p className="text-1xl font-[Poppins] font-medium mb-5 text-rose-950 text-center mt-3">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
