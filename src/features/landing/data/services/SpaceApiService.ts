import { SpaceDTO } from "../dtos/SpaceDTO";

const mockSpaces: SpaceDTO[] = [
  {
    id: "1",
    title: "AXA Tower Meeting Room",
    location: "Jakarta",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80",
    capacity: 4,
    type: "Office",
    daily_price: "Rp2,880,000",
    hourly_price: "Rp400,000",
  },
  {
    id: "2",
    title: "Suite 7 View",
    location: "Jakarta",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80",
    capacity: 4,
    type: "Co-Working Space",
    daily_price: "Rp2,880,000",
    hourly_price: "Rp400,000",
  },
  {
    id: "3",
    title: "Suite VIP 5 Non View",
    location: "Jakarta",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
    capacity: 4,
    type: "Class Room",
    daily_price: "Rp2,880,000",
    hourly_price: "Rp400,000",
  },
  {
    id: "4",
    title: "Suite 7 View",
    location: "Jakarta",
    image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80",
    capacity: 4,
    type: "Seminar Room",
    daily_price: "Rp2,880,000",
    hourly_price: "Rp400,000",
  },
  {
    id: "5",
    title: "Suite VIP 5 Non View",
    location: "Jakarta",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80",
    capacity: 4,
    type: "Meeting Room",
    daily_price: "Rp2,880,000",
    hourly_price: "Rp400,000",
  },
  {
    id: "6",
    title: "AXA Tower Meeting Room",
    location: "Jakarta",
    image: "https://images.unsplash.com/photo-1505409859467-3a796fd5798e?auto=format&fit=crop&q=80",
    capacity: 4,
    type: "Theatre Room",
    daily_price: "Rp2,880,000",
    hourly_price: "Rp400,000",
  },
];

export class SpaceApiService {
  async fetchAll(): Promise<SpaceDTO[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockSpaces), 500);
    });
  }
}