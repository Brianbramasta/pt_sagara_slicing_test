import { BrowseSpacesCard } from "./BrowseSpacesCard";
import { IconCoworking } from "@/icons/components/icons/IconCoworking";
import { IconMeetingRoom } from "@/icons/components/icons/IconMeetingRoom";
import { IconOffice } from "@/icons/components/icons/IconOffice";
import { IconForm } from "@/icons/components/icons/IconForm";

export const OtherSpacesSection: React.FC = () => {
  const spaceTypes = [
    { type: "Coworking", imageSrc: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80", colorClass: "bg-green-500", icon: <IconCoworking /> },
    { type: "Meeting Room", imageSrc: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80", colorClass: "bg-brand", icon: <IconMeetingRoom /> },
    { type: "Board Room", imageSrc: "https://images.unsplash.com/photo-1505409859467-3a796fd5798e?auto=format&fit=crop&q=80", colorClass: "bg-blue-500", icon: <IconOffice /> },
    { type: "Class Room", imageSrc: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80", colorClass: "bg-purple-500", icon: <IconOffice /> },
    { type: "Seminar", imageSrc: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80", colorClass: "bg-yellow-500", icon: <IconForm /> },
  ];

  return (
    <div className="col-span-2">
      <div className="flex justify-between items-center mb-5">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Other Spaces</h2>
          <p className="text-xs text-gray-400 mt-0.5">Find the perfect space for your next meeting or event.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-4  bg-gray-300 text-white rounded-lg flex items-center justify-center hover:bg-gray-400 transition text-xs">
            <div style={{zoom:0.7}}>
              <svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M34.2627 11.1517C34.9991 11.1517 35.596 10.5547 35.596 9.81836C35.596 9.08198 34.9991 8.48503 34.2627 8.48503L34.2627 9.81836L34.2627 11.1517ZM34.2627 9.81836L34.2627 8.48503L1.33375 8.48503L1.33375 9.81836L1.33375 11.1517L34.2627 11.1517L34.2627 9.81836ZM0.390938 8.87555C-0.129761 9.39625 -0.129761 10.2405 0.390938 10.7612L8.87622 19.2465C9.39692 19.7672 10.2411 19.7672 10.7618 19.2465C11.2825 18.7258 11.2825 17.8815 10.7618 17.3608L3.21937 9.81836L10.7618 2.27589C11.2825 1.75519 11.2825 0.91097 10.7618 0.39027C10.2411 -0.130428 9.39692 -0.130428 8.87622 0.39027L0.390938 8.87555Z" fill="#EBEEF3"/>
              </svg>
            </div>

          </button>
          <button className="px-4 py-4  bg-brand text-white rounded-lg flex items-center justify-center hover:bg-red-900 transition text-xs">
            <div style={{zoom:0.7}}>
              <svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.33301 8.48503C0.596628 8.48503 -0.000325561 9.08198 -0.000325561 9.81836C-0.000325561 10.5547 0.596628 11.1517 1.33301 11.1517V9.81836V8.48503ZM1.33301 9.81836V11.1517L34.262 11.1517V9.81836V8.48503L1.33301 8.48503V9.81836ZM35.2048 10.7612C35.7255 10.2405 35.7255 9.39625 35.2048 8.87555L26.7195 0.390268C26.1988 -0.13043 25.3546 -0.13043 24.8339 0.390268C24.3132 0.910968 24.3132 1.75519 24.8339 2.27589L32.3763 9.81836L24.8339 17.3608C24.3132 17.8815 24.3132 18.7258 24.8339 19.2465C25.3546 19.7671 26.1988 19.7671 26.7195 19.2465L35.2048 10.7612Z" fill="#EBEEF3"/>
              </svg>
            </div>

          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {spaceTypes.map((space, idx) => (
          <BrowseSpacesCard
            key={idx}
            imageSrc={space.imageSrc}
            type={space.type}
            colorClass={space.colorClass}
            icon={space.icon}
          />
        ))}
      </div>
    </div>
  );
};