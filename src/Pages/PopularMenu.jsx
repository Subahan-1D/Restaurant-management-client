import { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import MenuItem from "../Routes/Shared/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(
              (item) => item.category === "popular")
            setMenu(popularItems)})
    },[])
    return (
      <section>
        <SectionTitle
          subHeading="---Check it out---"
          heading="FROM OUR MENU"
        ></SectionTitle>
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-10 my-16">
          {menu.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>

        <div className="text-center">
          <button className="btn btn-outline text-2xl border-0 mb-10  border-b-4 mt-6">
            View Full Menu
          </button>
        </div>
      </section>
    );
};

export default PopularMenu;