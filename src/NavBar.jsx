import Cart from "./assets/Home/Vectorcart.png"
import Bell from "./assets/Home/Notification iconbell.png"
const NavBar = () => {



  return (
    <div className="NavBar">
      <div className="flex flex-row justify-between px-20 mt-5">
        <h3>ARTSY.</h3>

        <ul className="flex flex-row gap-x-5">
          <li><a href="#">Home</a></li>
          <li><a href="#">Marketplace</a></li>
          <li><a href="#">Auctions</a></li>
          <li><a href="#">Drop</a></li>
        </ul>
       <div>
        <img src={ Cart }/>
        <img src= { Bell }/>
        </div>
      </div>
      
    </div>
  );
}
 
export default NavBar;