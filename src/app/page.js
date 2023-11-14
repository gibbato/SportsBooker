import Navbar from '@/components/Navbar'
import SportBox from '@/components/SportBox'
import AllSportsSideBar from '@/components/AllSportsSideBar'
import BetSlip from '@/components/BetSlip'
import Image from 'next/image'


const sports = ['Basketball', 'Baseball', 'Boxing','College Football', 'Cricket', 'Football', 'Golf', 'Ice Hockey', 'MMA', 'Politics', 'Rugby', 'Soccer', 'Tennis' ];

export default function Home() {
  return (
    <div>
    <Navbar sports={sports}/>
    <div className="grid grid-cols-6 gap-4 mt-4">
      <div className="col-span-2 bg-neutral-950 m-6 p-6">
      <AllSportsSideBar sports={sports} />
      </div>
      <div className="col-start-3 col-span-2 grid grid-cols-2 gap-4">
          {sports.map((sport) => (
            <div key={sport}>
              <SportBox sportName={sport} />
            </div>
          ))}
        </div>
        <BetSlip/>
    </div>
  </div>
);
};
