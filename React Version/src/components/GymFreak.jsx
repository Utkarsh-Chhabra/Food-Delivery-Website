import React from "react";

const GymFreak = () => {

    const items = [
  {
    title: "High Protein Meals",
    img: "https://cdn-aboak.nitrocdn.com/QJsLnWfsWAiuukSIMowyVEHtotvSQZoR/assets/images/optimized/rev-ca18e1d/www.slenderkitchen.com/sites/default/files/styles/featured_1500/public/recipe_images/chicken-quinoa-bowl.jpg",
    desc: "Lean & Muscle Fuel",
  },
  {
    title: "Pre Workouts",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWOw_4YbxYJo7_vCyZ_3_nEPEpCfqHTUHG7A&s",
    desc: "Energy Boosters",
  },
  {
    title: "Post-Workout Recovery",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwLqi_bUwmO0DXdmfffYSMlbMifd8KprGeFg&s",
    desc: "Repair & Recover",
  },
  {
    title: "Low-Carb",
    img: "https://www.jessicagavin.com/wp-content/uploads/2022/06/chicken-caesar-salad-28-1200.jpg",
    desc: "Low Carb Options",
  },
  {
    title: "Healthy Snacks & Sides",
    img: "https://www.veggieinspired.com/wp-content/uploads/2024/03/seasoned-roasted-chickpeas-featured.jpg",
    desc: "Light & Healthy Bites",
  }
];




    return (
        <section className="categories-section pt-30 bg-gray-900 m-0">
            <div className="container mx-auto px-6">
                <div className="section-header text-center mb-8">
                    <h2 className="section-title text-4xl font-bold text-amber-400">Gym Freak</h2>
                </div>

                <div className="flex flex-wrap -mx-3">
                    {items.map((c) => (
                        <div key={c.title} className="px-3 w-full sm:w-1/2 lg:w-1/4 mb-6">
                            <article className="group relative h-full overflow-hidden rounded-2xl bg-gray-800/80 shadow-lg border border-gray-700/60 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-amber-400/60">

                                <div className="relative">
                                    <img
                                        src={c.img}
                                        alt={c.title}
                                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-gray-900/85 via-gray-900/0 to-gray-900/0" />
                                </div>

                                <div className="relative z-10 p-5 flex flex-col h-full bg-linear-to-br from-gray-900/90 via-gray-900/40 to-gray-900/80">

                                    <div>
                                        <span className="inline-block bg-amber-500/15 text-amber-300 px-3 py-1 rounded-full text-xs font-semibold tracking-wide mb-3 group-hover:bg-amber-500/25">
                                            {c.desc}
                                        </span>
                                        <h3 className="text-white text-xl font-semibold leading-snug">{c.title}</h3>
                                        <p className="mt-2 text-sm text-gray-300/90">
                                            Push your limits with {c.title.toLowerCase()}.
                                        </p>
                                    </div>

                                    <div className="mt-6">
                                        <button
                                            type="button"
                                            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-400 px-5 py-2 font-semibold text-gray-900 shadow-md transition duration-200 hover:bg-amber-300 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-200"
                                        >
                                            Explore
                                            <span aria-hidden="true">→</span>
                                        </button>
                                    </div>

                                </div>

                                <div className="absolute inset-0 pointer-events-none bg-linear-to-br from-amber-500/0 via-amber-500/0 to-amber-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GymFreak;
