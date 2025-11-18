import React from 'react';

export default function Categories() {

  const items = [
    {
      title: "Healthy Bites",
      img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/01/12/12/healthy-avo-food.jpg",
      desc: "Eat Smart",
      link: "/healtybytes",
    },
    {
      title: "Gym Freak",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic2.bigstockphoto.com%2F6%2F5%2F3%2Flarge1500%2F356992094.jpg&f=1&nofb=1&ipt=9d48ef8a557f0242c4027c69ba1eb3b9482acf62fe1ad0bf22f276c7c909c1ab",
      desc: "Protein Packed",
      link: "/gymfreak",
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
    }
  ];


  return (
    <section className="categories-section lg:p-12 bg-gray-900 " >
      <div className="container mx-auto px-6">
        <div className="section-header text-center mb-8">
          <h2 className="section-title text-4xl font-bold text-amber-400">What's on your mind?</h2>
          <p className="section-subtitle text-gray-400">Choose from our delicious categories</p>
        </div>

        <div className="flex flex-wrap -mx-3">
          {items.map((c) => (
            <div key={c.title} className="px-3 w-full sm:w-1/2 lg:w-1/4 mb-6">
              <article className="group relative h-full overflow-hidden rounded-2xl bg-gray-800/80 shadow-lg border border-gray-700/60 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-amber-400/60">
                <div className="relative">
                  <img src={c.img} alt={c.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 via-gray-900/0 to-gray-900/0" />
                </div>
                <div className="relative z-10 p-5 flex flex-col h-full bg-linear-to-br from-gray-900/90 via-gray-900/40 to-gray-900/80">
                  <div>
                    <span className="inline-block bg-amber-500/15 text-amber-300 px-3 py-1 rounded-full text-xs font-semibold tracking-wide mb-3 group-hover:bg-amber-500/25">
                      {c.desc}
                    </span>
                    <h3 className="text-white text-xl font-semibold leading-snug">{c.title}</h3>
                  </div>

                  <div className="mt-6">
                    <a
                      href={c.link || "#"}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-400 px-5 py-2 font-semibold text-gray-900 shadow-md transition duration-200 hover:bg-amber-300 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-200"
                    >
                      Visit
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none bg-linear-to-br from-amber-500/0 via-amber-500/0 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </article>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
}
