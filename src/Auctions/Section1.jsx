import one from './assets/Rectangle 247.png'
import two from './assets/Rectangle 246.png'
import three from './assets/Rectangle 245.png'
const Section1auction = () => {
  return (  
    <div className="mx-20">
      <p className="mt-28 font-semibold">Here's an overview of products actively on auction, explore!</p>

      <div className='flex flex-row'>
        <div>
          <img src={ one }/>
        </div>

        <div>
          <img src={ three }/>
        </div>

        <div>
          <img src={ two }/>
        </div>
      </div>
    </div>
  );
}
 
export default Section1auction;