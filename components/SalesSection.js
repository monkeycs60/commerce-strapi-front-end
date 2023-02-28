import SalesCard from "./SalesCard";
import { SalesSectionStyle } from "@/styles/SalesSectionStyle";

const SalesSection = () => {
  return (
    <SalesSectionStyle>
      <SalesCard
        title="Extensive Selection"
        description="Find your perfect plant match from our vast collection."
        source="choice.png"
        longtext="Botanical Bliss offers a wide variety of plants, from common favorites to unique specimens, ensuring that customers can find the right plant to fit their lifestyle and preferences."
      />
      <SalesCard
        title="Expert Advice"
        description="Get expert guidance to help your plants thrive."
        source="expert.png"
        longtext="Our team of plant experts are here to help you find the perfect plant for your home and lifestyle. We can also help you care for your plants and answer any questions you may have."
      />
      <SalesCard
        title="Sustainability Focus"
        description="Join us in our commitment to a sustainable future."
        source="sustainability.png"
        longtext="Botanical Bliss is committed to sustainability. We are working to reduce our carbon footprint and are committed to using sustainable packaging and shipping materials."
      />
      <SalesCard
        title="Convenient Delivery"
        description="Order plants from the comfort of your home and have them delivered to your door."
        source="delivery.png"
        longtext="We offer convenient delivery options to make it easy for you to get the plants you want. We also offer curbside pickup for customers who prefer to pick up their plants in person."
      />
    </SalesSectionStyle>
  );
};

export default SalesSection;
