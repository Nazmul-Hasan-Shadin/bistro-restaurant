import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import FeaturedImg from '../../../assets/home/featured.jpg'
import './FeaturedMenue.css'
const FeaturedMenue = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-10 my-10"> 
        <SectionTitle subHeading={'check it Out'} headding={'Featured Item'} ></SectionTitle>
        <div className="md:flex items-center justify-center bg-slate-500 bg-opacity-40 gap-8 py-20 pt-12 px-36">
            <div>
        <img src={FeaturedImg} alt="" />
            </div>
            <div>
                <p>Aug 20,2024 </p>
                <p className="uppercase">Where i can get some money?</p>
                <p>

Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                </p>
 <button className="btn btn-outline border-0 border-b-4 mt-4" >Order Now</button>
            </div>
        </div>
        </div>
    );
};

export default FeaturedMenue;