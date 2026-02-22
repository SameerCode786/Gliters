import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = [
  {
    name: "Rose Gold Shimmer",
    price: "£18.00",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=600",
    tag: "BESTSELLER"
  },
  {
    name: "Ocean Teal Swirl",
    price: "£22.00",
    image: "https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?auto=format&fit=crop&q=80&w=600",
    tag: "NEW"
  },
  {
    name: "Golden Honey Glow",
    price: "£20.00",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=600",
    tag: "LIMITED"
  },
  {
    name: "Midnight Sparkle",
    price: "£22.00",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600",
    tag: "TRENDING"
  },
  {
    name: "Lavender Dream",
    price: "£18.00",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=600",
    tag: "POPULAR"
  }
];

export default function ProductSlider() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h3 className="text-[12px] uppercase tracking-[0.4em] text-zinc-400 font-semibold mb-4">
              Get Dressed!
            </h3>
            <h2 className="font-serif text-[20px] text-zinc-900">
              New <span className="italic">Arrivals</span>
            </h2>
          </div>
          <button className="text-[12px] font-bold uppercase tracking-widest text-zinc-900 border-b-2 border-honey pb-1 hover:text-rosegold hover:border-rosegold transition-all">
            View All Products
          </button>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="product-swiper pb-16"
        >
          {products.map((product, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-zinc-50 mb-6 shimmer-effect">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {product.tag && (
                    <div className="absolute top-4 left-4 bg-white px-3 py-1 text-[9px] font-bold tracking-widest text-zinc-900 shadow-sm">
                      {product.tag}
                    </div>
                  )}
                  <div className="absolute inset-x-4 bottom-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="w-full bg-zinc-900 text-white py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-rosegold">
                      Add to Bag
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="font-medium text-zinc-900 mb-1 group-hover:text-rosegold transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-zinc-500 font-serif text-lg">{product.price}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
