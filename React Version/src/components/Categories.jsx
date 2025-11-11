import React from 'react';

export default function Categories() {

    const items = [
  {
    title: "Healthy Bites",
    img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/01/12/12/healthy-avo-food.jpg",
    desc: "Eat Smart",
  },
  {
    title: "Gym Freak",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic2.bigstockphoto.com%2F6%2F5%2F3%2Flarge1500%2F356992094.jpg&f=1&nofb=1&ipt=9d48ef8a557f0242c4027c69ba1eb3b9482acf62fe1ad0bf22f276c7c909c1ab",
    desc: "Protein Packed",
  },
  {
    title: "Desi Tadka",
    img: "https://tb-static.uber.com/prod/image-proc/processed_images/875c3e006e46be285238cbee48df46fb/69ad85cd7b39888042b3bbf1c22d630d.webp",
    desc: "Asian Delight",
  },
  {
    title: "South Treats",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPRKGeMstIZbp32iyiVk8FtraGv4UhEoJ1fg&s",
    desc: "Comfort Food",
  },
  {
    title: "Street Food",
    img: "https://blog.swiggy.com/wp-content/uploads/2024/10/Image1_Pani-Puri-1024x538.jpg",
    desc: "Spicy & Tangy",
  },
  {
    title: "Sugar Cravings",
    img: "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2025-01/360_F_176331484_nLHY9EoW0ETwPZaS9OBXPGbCJhT70GZe.jpg",
    desc: "Sweet & Indulgent",
  },
  {
    title: "Chinese",
    img: "https://imgs.search.brave.com/Epp5IhoBFUPNehemYNOGWCyJIWs3POYaRy7BnugFEag/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzE1LzI2LzI4/LzM2MF9GXzExNTI2/MjgzOF9RZGZ3dml5/dzlBVGp3MFRObmt5/OTVSanZLb1FYcHJq/NS5qcGc",
    desc: "Fiery Flavours",
  },
  {
    title: "Italian",
    img: "https://imgs.search.brave.com/WbXTGZq9m_XTy7p4fPfTi7fFrB3drQuDp7Q_b4FeT64/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNDYy/ODU5LmpwZw",
    desc: "Cheesy Delight",
  },
  {
    title: "Japanese",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi-dRzmT1xjPdcg-_F9ZQPjnhWORff2AP1BQ&s",
    desc: "Authentic Flavours",
  },
  {
    title: "Rice Bowls",
    img: "https://imgs.search.brave.com/AvGd8KheBgEOp6tFw9oaWf2HoNwj5lONzmQt0MZ80i0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9wYWxt/LWxlYWYtdHJheXMtZmlsbGVkLXJpY2UtZGlzaGVzLXNsaWNlZC1saW1lLWRpZ2l0YWwtMzgxMjU0NTM3LmpwZw",
    desc: "Tender Bites",
  },
  {
    title: "Beverages",
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&h=600&fit=crop",
    desc: "Cool & Refreshing",
  },
  {
    title: "Seafood Specials",
    img: "https://images.unsplash.com/photo-1588167056547-c183313da7c1?w=800&h=600&fit=crop",
    desc: "Fresh From the Ocean",
  },
];


    return (
        <section className="categories-section py-12 bg-gray-900" >
            <div className="container mx-auto px-6">
                <div className="section-header text-center mb-8">
                    <h2 className="section-title text-4xl font-bold text-amber-400">What's on your mind?</h2>
                    <p className="section-subtitle text-gray-400">Choose from our delicious categories</p>
                </div>

                <div className="flex flex-wrap -mx-2">
                    {items.map((c) => (
                        <div key={c.title} className="px-2 w-full sm:w-1/2 lg:w-1/4 mb-4">
                            <div className="category-card bg-gray-800 rounded-lg overflow-hidden h-full flex flex-col">
                                <img src={c.img} alt={c.title} className="w-full h-40 object-cover" />
                                <div className="p-4 flex-1 flex flex-col">
                                    <div>
                                        <h3 className="text-white font-semibold">{c.title}</h3>
                                        <p className="text-gray-400 text-sm">{c.desc}</p>
                                    </div>

                                    <div className="mt-4 flex justify-end">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-4 py-2 bg-amber-400 hover:bg-amber-500 text-black rounded-full font-semibold shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-amber-300 cursor-pointer"
                                        >
                                            Visit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
}
