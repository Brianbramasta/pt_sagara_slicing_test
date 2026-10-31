# Brief: slicing anda implement halaman search page
Tanggal: 31 oktober 2026 12:53

---

bantu saya slcigin halaman search page dong prototype\search-page\search-page.html

1. slicing file disini src\features\landing pastikan sesuaikan dengan ketentusan documentation\rules\domain-data-presentation\27 Oktober 2026\folder-struktur.md
documentation\rules\domain-data-presentation\27 Oktober 2026\mermaid diagram.md
documentation\rules\domain-data-presentation\27 Oktober 2026\rules.md

2. untuk saat ini karena belum ada apinya buatkan data dummy dulu di dalam service

3. halaman ini akan di akses ketika klik search di src\features\landing\presentation\components\HeroSection.tsx <div className="mt-5 flex justify-end">
                <button
                  type="button"
                  className="bg-brand text-white px-10 py-2.5 rounded-md text-[13px] font-medium hover:bg-brand-dark transition shadow-sm"
                >
                  Search
                </button>
              </div>