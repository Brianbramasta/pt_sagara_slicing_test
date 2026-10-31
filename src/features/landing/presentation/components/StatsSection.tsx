import { StatsCard } from "./StatsCard";

export const StatsSection: React.FC = () => {
  const stats = [
    { icon: <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.4088 43.1057C33.8401 43.1057 43.1067 33.8391 43.1067 22.4078C43.1067 10.9767 33.8401 1.70996 22.4088 1.70996C10.9777 1.70996 1.71094 10.9767 1.71094 22.4078C1.71094 33.8391 10.9777 43.1057 22.4088 43.1057Z" stroke-width="3.42" stroke-linecap="round" stroke-linejoin="round" stroke="#10375C"/>
<path d="M3.30273 30.3683H8.87523C10.3532 30.3683 11.7705 29.7812 12.8156 28.7361C13.8606 27.6911 14.4477 26.2737 14.4477 24.7958V20.0194C14.4477 18.5415 15.0348 17.1241 16.0799 16.079C17.1249 15.034 18.5423 14.4469 20.0202 14.4469C21.4982 14.4469 22.9155 13.8598 23.9606 12.8147C25.0056 11.7697 25.5927 10.3523 25.5927 8.87437V1.93262" stroke-width="3.42" stroke-linecap="round" stroke-linejoin="round" stroke="#10375C"/>
<path d="M43.1073 22.0891C41.513 21.2619 39.745 20.8253 37.9488 20.8154H31.1663C29.6883 20.8154 28.2709 21.4025 27.2259 22.4476C26.1808 23.4926 25.5938 24.91 25.5938 26.3879C25.5938 27.8659 26.1808 29.2832 27.2259 30.3283C28.2709 31.3733 29.6883 31.9604 31.1663 31.9604C32.2218 31.9604 33.2344 32.3798 33.9808 33.1262C34.7272 33.8726 35.1466 34.8852 35.1466 35.9408V38.7111" stroke-width="3.42" stroke-linecap="round" stroke-linejoin="round" stroke="#10375C"/>
</svg>
, value: "11", label: "Vibrant Cities" },
    { icon: <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.2637 21.5871C11.2637 22.3189 11.4078 23.0436 11.6879 23.7197C11.9679 24.3957 12.3784 25.01 12.8958 25.5275C13.4133 26.045 14.0276 26.4554 14.7037 26.7355C15.3798 27.0155 16.1044 27.1596 16.8362 27.1596C17.568 27.1596 18.2926 27.0155 18.9687 26.7355C19.6448 26.4554 20.2591 26.045 20.7765 25.5275C21.294 25.01 21.7044 24.3957 21.9845 23.7197C22.2645 23.0436 22.4087 22.3189 22.4087 21.5871C22.4087 20.1092 21.8216 18.6918 20.7765 17.6468C19.7315 16.6017 18.3141 16.0146 16.8362 16.0146C15.3583 16.0146 13.9409 16.6017 12.8958 17.6468C11.8508 18.6918 11.2637 20.1092 11.2637 21.5871Z" stroke-width="3.42" stroke-linecap="round" stroke-linejoin="round" stroke="#10375C"/>
<path d="M30.7187 27.9357C27.7008 36.0286 20.0022 43.0793 16.8363 43.0793C12.8559 43.0793 1.71094 31.9342 1.71094 21.5853C1.71094 13.2318 8.4828 6.45996 16.8363 6.45996C17.3082 6.45996 17.775 6.48158 18.2359 6.52387" stroke-width="3.42" stroke-linecap="round" stroke-linejoin="round" stroke="#10375C"/>
<path d="M24.5645 12.1076C23.5019 11.9227 23.5019 10.3973 24.5645 10.2125C28.414 9.54277 31.4758 6.61068 32.3115 2.79371L32.3755 2.50112C32.6054 1.45095 34.1007 1.44442 34.3396 2.49254L34.4176 2.83351C35.284 6.63246 38.3467 9.53981 42.1853 10.2077C43.2533 10.3935 43.2533 11.9266 42.1853 12.1124C38.3467 12.7803 35.284 15.6876 34.4176 19.4866L34.3396 19.8275C34.1007 20.8757 32.6054 20.8691 32.3755 19.819L32.3115 19.5264C31.4758 15.7094 28.414 12.7773 24.5645 12.1076Z" stroke-width="3.42" stroke-linecap="round" stroke-linejoin="round" stroke="#10375C"/>
</svg>
, value: "22", label: "prime locations in<br>Asia's CBDs" },
    { icon: <svg width="43" height="41" viewBox="0 0 43 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.00344 13.7831C2.21719 11.7487 3.65625 10.1466 5.68031 9.855C8.49 9.44719 13.3622 9 21.1875 9C29.0128 9 33.885 9.44812 36.6937 9.85406C38.7187 10.1475 40.1578 11.7497 40.3716 13.7831C40.6163 16.1231 40.875 19.6256 40.875 24C40.875 28.3744 40.6163 31.8769 40.3716 34.2169C40.1578 36.2512 38.7187 37.8525 36.6947 38.145C33.885 38.5528 29.0128 39 21.1875 39C13.3622 39 8.49 38.5519 5.68125 38.1459C3.65625 37.8525 2.21719 36.2503 2.00344 34.2169C1.75875 31.8769 1.5 28.3744 1.5 24C1.5 19.6256 1.75875 16.1231 2.00344 13.7831Z" stroke-width="3" stroke-linejoin="round" stroke="#10375C"/>
<path d="M40.875 23.0625C40.875 23.0625 36.8091 23.8819 24 23.9888M1.5 23.0625C1.5 23.0625 5.56594 23.8819 18.375 23.9888" stroke-width="3" stroke-linejoin="round" stroke="#10375C"/>
<path d="M11.8125 9C12.3094 7.0125 13.4391 4.77 14.1956 3.40312C14.655 2.57062 15.45 1.98844 16.3894 1.84406C17.4647 1.67812 19.1044 1.5 21.1875 1.5C23.2706 1.5 24.9094 1.67812 25.9856 1.84406C26.925 1.98844 27.72 2.57062 28.1794 3.40312C28.9359 4.77 30.0656 7.0125 30.5625 9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke="#10375C"/>
<path d="M21.4191 28.2182C22.8319 28.2117 23.9016 27.2479 23.9634 25.8361C23.9859 25.3298 24 24.7232 24 23.9995C24 23.2757 23.9859 22.6682 23.9634 22.1629C23.9016 20.7511 22.8319 19.7864 21.4191 19.7817C21.2647 19.7811 21.1103 19.7811 20.9559 19.7817C19.5431 19.7864 18.4734 20.7511 18.4116 22.1629C18.3891 22.6692 18.375 23.2757 18.375 23.9995C18.375 24.7232 18.3891 25.3307 18.4116 25.8361C18.4734 27.2479 19.5431 28.2117 20.9559 28.2173C21.1103 28.2179 21.2647 28.2188 21.4191 28.2182Z" stroke-width="3" stroke-linejoin="round" stroke="#10375C"/>
</svg>
, value: "25", label: "years in business" },
    { icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.8566 3.42801C21.8566 2.24455 22.816 1.28516 23.9994 1.28516H27.428C28.6115 1.28516 29.5709 2.24455 29.5709 3.42801C29.5709 4.61149 28.6115 5.57087 27.428 5.57087H26.1423V10.6751L38.672 16.9399C39.3978 17.3029 39.8566 18.0449 39.8566 18.8566V21.8566H44.5709C45.7544 21.8566 46.7137 22.816 46.7137 23.9994C46.7137 25.1829 45.7544 26.1423 44.5709 26.1423H44.1423V42.428H44.5709C45.7544 42.428 46.7137 43.3873 46.7137 44.5709C46.7137 45.7544 45.7544 46.7137 44.5709 46.7137H3.42801C2.24455 46.7137 1.28516 45.7544 1.28516 44.5709C1.28516 43.3873 2.24455 42.428 3.42801 42.428H3.85659V26.1423H3.42801C2.24455 26.1423 1.28516 25.1829 1.28516 23.9994C1.28516 22.816 2.24455 21.8566 3.42801 21.8566H8.1423V18.8566C8.1423 18.0449 8.60087 17.3029 9.32684 16.9399L21.8566 10.6751V3.42801ZM8.1423 26.1423V42.428H13.2852V26.1423H8.1423ZM17.5709 26.1423V42.428H20.9994V37.7137C20.9994 36.057 22.3426 34.7137 23.9994 34.7137C25.6563 34.7137 26.9994 36.057 26.9994 37.7137V42.428H30.428V26.1423H17.5709ZM34.7137 26.1423V42.428H39.8566V26.1423H34.7137Z" fill-rule="evenodd" clip-rule="evenodd" fill="#10375C"/>
</svg>
, value: "100%", label: "grade A+ Buildings" },
    { icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.45508 11.5312L10.4427 15.2918L16.68 14.2119C18.7855 13.8474 20.9432 14.4501 22.555 15.853" stroke-width="3.42" stroke-linecap="round" stroke-linejoin="round" stroke="#10375C"/>
<path d="M37.6356 31.2665L27.7561 38.2829C25.5844 39.8253 22.6823 39.853 20.4814 38.3526L3.45508 26.7461" stroke-width="3.42" stroke-linecap="round" stroke-linejoin="round" stroke="#10375C"/>
<path d="M44.3874 26.6717L37.3969 31.4484L26.5507 22.6907L22.5611 25.5944C20.9389 26.7751 18.6726 26.4569 17.4381 24.8752C16.2065 23.2972 16.4441 21.0275 17.9759 19.7387L22.13 16.2434C24.1211 14.5682 26.7093 13.7777 29.2966 14.0545L35.771 14.7472L44.3874 10.0898" stroke-width="3.42" stroke-linecap="round" stroke-linejoin="round" stroke="#10375C"/>
<path d="M26.5508 22.7123C29.1607 25.0375 32.8619 23.8513 34.2381 21.9531" stroke-width="3.42" stroke-linecap="round" stroke-linejoin="round" stroke="#10375C"/>
</svg>
, value: "80,000+", label: "businesses served", fullWidth: true },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col lg:flex-row gap-0">
        <div className="lg:w-1/2 grid grid-cols-2 gap-y-12 gap-x-4 py-8 lg:pr-12">
          {stats.map((stat, index) => (
            <div key={index} className={stat.fullWidth ? "col-span-2 mt-2" : ""}>
              <StatsCard icon={stat.icon} value={stat.value} label={stat.label} />
            </div>
          ))}
        </div>
        <div className="lg:w-1/2 bg-brand p-12 lg:p-16 text-white">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-medium text-white/90">Why CEO SUITE?</span>
            <div className="h-[1px] bg-white/40 w-16"></div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight text-white">
            We revolutionize your<br />workspace
          </h2>
          <p className="text-white/80 text-[13px] leading-relaxed mb-5">
            In today's fast-paced business environment, finding the right workspace solution is crucial
            to your company's success. CEO SUITE offers an unparalleled workspace experience that
            combines premium locations, flexibility, top-notch amenities, and exceptional service to
            meet the needs of modern businesses.
          </p>
          <p className="text-white/80 text-[13px] leading-relaxed">
            As Asia's leading serviced office provider, CEO SUITE stands out as the ideal partner for
            companies seeking more than just office space—a place where business can thrive.
          </p>
        </div>
      </div>
    </section>
  );
};