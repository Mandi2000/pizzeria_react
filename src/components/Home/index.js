import { AboutUs } from "../AboutUs";
import { Feacture } from "../Feacture";
import { Hero } from "../Hero";
import Location from "../Location";
import { Products } from "../Products";
import { productData, productDataTwo } from "../Products/data";


export function Home() {
  return (
    <>
      <Hero />
      <Products id="favorite" Heading='Choose Your Favorite' data={productData} />
      <Feacture />
      <Products id="sweets" Heading='Sweet Treats For You' data={productDataTwo} />
      <AboutUs/>
      <Location
        title="Our Restaurant Location"
        address="123 Main Street, Anytown USA"
        mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.042291898827!2d-95.71289168487996!3d37.09024057989748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c131d40e05b8c7%3A0x2cf5e5da67da8dd5!2s123%20Main%20St%2C%20Anytown%2C%20USA!5e0!3m2!1sen!2sca!4v1622564463998!5m2!1sen!2sca"
      />      
    </>
  );
}