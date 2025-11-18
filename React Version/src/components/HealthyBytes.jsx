import React from "react";


const HealthyBytes = () => {

    const items = [
        {
            title: "Fresh Greens",
            img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
            desc: "Clean & Nutritious",
        },
        {
            title: "Smoothie Bowl",
            img: "https://www.budgetbytes.com/wp-content/uploads/2025/01/Smoothie-Bowl-V2-1152x1536.jpg",
            desc: "Fruit-Filled Energy",
        },
        {
            title: "Lean Protein",
            img: "https://images.onlymyhealth.com/imported/images/2024/February/21_Feb_2024/main-leanproteinvsprotein.jpg",
            desc: "Fuel Your Muscles",
        },
        {
            title: "Vegan Meals",
            img: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg",
            desc: "Plant Power",
        },
        {
            title: "Detox Drinks",
            img: "https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg",
            desc: "Refresh & Reset",
        },
        {
            title: "Fruit Fiesta",
            img: "https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg",
            desc: "Nature’s Candy",
        },
        {
            title: "Whole Grains",
            img: "https://images.pexels.com/photos/4198023/pexels-photo-4198023.jpeg",
            desc: "Heart Healthy",
        },
        {
            title: "Green Tea",
            img: "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg",
            desc: "Light & Calming",
        },
        {
            title: "Salads",
            img: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg",
            desc: "Fresh Crunch",
        }
    ];


    return (

        <section className="categories-section pt-30 bg-gray-900 m-0" >
            <div className="container mx-auto px-6">
                <div className="section-header text-center mb-8">
                    <h2 className="section-title text-4xl font-bold text-amber-400">Healthy Food</h2>
                </div>

                <div className="flex flex-wrap -mx-3">
                    {items.map((c) => (
                        <div key={c.title} className="px-3 w-full sm:w-1/2 lg:w-1/4 mb-6">
                            <article className="group relative h-full overflow-hidden rounded-2xl bg-gray-800/80 shadow-lg border border-gray-700/60 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-amber-400/60">
                                <div className="relative">
                                    <img src={c.img} alt={c.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                                    <div className="absolute inset-0 bg-linear-to-t from-gray-900/85 via-gray-900/0 to-gray-900/0" />
                                </div>
                                <div className="relative z-10 p-5 flex flex-col h-full bg-linear-to-br from-gray-900/90 via-gray-900/40 to-gray-900/80">
                                    <div>
                                        <span className="inline-block bg-amber-500/15 text-amber-300 px-3 py-1 rounded-full text-xs font-semibold tracking-wide mb-3 group-hover:bg-amber-500/25">
                                            {c.desc}
                                        </span>
                                        <h3 className="text-white text-xl font-semibold leading-snug">{c.title}</h3>
                                        <p className="mt-2 text-sm text-gray-300/90">Discover wholesome goodness with {c.title.toLowerCase()}.</p>
                                    </div>

                                    <div className="mt-6">
                                        <button
                                            type="button"
                                            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-400 px-5 py-2 font-semibold text-gray-900 shadow-md transition duration-200 hover:bg-amber-300 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-200"
                                        >
                                            Visit
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
        </section >

    )
}

export default HealthyBytes;