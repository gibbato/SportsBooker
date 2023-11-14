import Navbar from '@/components/Navbar'
import SportBox from '@/components/SportBox'
import Image from 'next/image'

const sports = ['Football', 'Basketball', 'Baseball', 'Soccer'];

export default function Home() {
  return (
    <div>
    <Navbar />
    <div className="flex flex-wrap relative">
      {sports.map((sport) => (
        <div key={sport} className="w-1/2 p-2">
          <SportBox sportName={sport} />
        </div>
      ))}
    </div>
  </div>
);
};
