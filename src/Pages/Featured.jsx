import SectionTitle from "../components/SectionTitle";
import './Featured.css'
import featuredImg from "../assets/home/featured.jpg";
const Featured = () => {
  return (
    <div className="featured-item text-white my-20 pt-8">
      <SectionTitle
        subHeading="---Check it out---"
        heading="FEATURED ITEM"
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-10 px-36 gap-5">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>March 20, 2023</p>
          <p className="uppercase">WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
