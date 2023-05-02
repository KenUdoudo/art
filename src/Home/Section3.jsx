import backdrop from "./assets/Rectangle 90web gradient.png"
import inside from './assets/Rectangle 91inside gradient.png'
const Section3home = () => {
  return (
    <div className="static mt-40">
      <div className="absolute mx-20 z-10">
        <h3 className="mt-6 text-2xl text-white">See Upcoming Auctions and Exibitions</h3>
        <hr className="my-4 mx-2" />
        <div>
          <div className="absolute z-20 text-white">
            <p>testing z index</p>
          </div>
          <img src={ inside }/>
        </div>
      </div>
      <img src={ backdrop } className="w-full h-auto z-0"/>
      
    </div>
  );
}
 
export default Section3home;