import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-50 pt-24 pb-12 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-[0.3em] text-zinc-900 mb-8">Quick Links</h4>
            <ul className="space-y-4 text-[13px] text-zinc-500">
              <li><a href="#" className="hover:text-rosegold transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-rosegold transition-colors">Shop Online</a></li>
              <li><a href="#" className="hover:text-rosegold transition-colors">Latest Articles</a></li>
              <li><a href="#" className="hover:text-rosegold transition-colors">Find the Store</a></li>
              <li><a href="#" className="hover:text-rosegold transition-colors">Collections</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-[0.3em] text-zinc-900 mb-8">Get in Touch</h4>
            <p className="text-[13px] text-zinc-500 mb-6 leading-relaxed">
              Subscribe to our e-mail list and stay up-to-date with our news.
            </p>
            <div className="flex gap-2 mb-8">
              <input 
                type="email" 
                placeholder="YOUR EMAIL" 
                className="bg-white border border-zinc-200 px-4 py-2 text-[11px] tracking-widest focus:outline-none w-full"
              />
              <button className="bg-rosegold text-white px-4 py-2 text-[11px] font-bold uppercase tracking-widest">
                <Mail className="w-4 h-4" />
              </button>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-400 hover:text-rosegold transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="text-zinc-400 hover:text-rosegold transition-colors"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="text-zinc-400 hover:text-rosegold transition-colors"><Instagram className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-[0.3em] text-zinc-900 mb-8">Find Your Store</h4>
            <div className="aspect-video bg-zinc-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=400" 
                alt="Map Placeholder" 
                className="w-full h-full object-cover opacity-50 grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="mt-4 text-[11px] text-zinc-400 uppercase tracking-widest">London, United Kingdom</p>
          </div>

          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-[0.3em] text-zinc-900 mb-8">Follow Us</h4>
            <div className="grid grid-cols-3 gap-2">
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="aspect-square bg-zinc-200 overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/${i+10}/200`} 
                    alt="Social" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
            <p className="mt-4 text-[11px] text-zinc-400 uppercase tracking-widest">@glitterglow</p>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-zinc-400 uppercase tracking-widest">
            © 2026 Glitter&Glow Boutique. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] text-zinc-400 uppercase tracking-widest">
            <a href="#" className="hover:text-zinc-900 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Privacy Policy</a>
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="font-bold text-zinc-900">TOP ↑</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
