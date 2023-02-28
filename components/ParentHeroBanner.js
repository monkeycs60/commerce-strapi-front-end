import { useQuery } from "urql";
import { PRODUCT_QUERY } from "@/lib/query";
import HeroBanner from "@/components/HeroBanner";

const ParentHeroBanner = () => {
  const [result] = useQuery({
    query: PRODUCT_QUERY,
  });
  const { data, fetching, error } = result;

  const products = data?.products?.data || [];
  const randomProduct = products[Math.floor(Math.random() * products.length)];

  return (
    <>
      <HeroBanner product={randomProduct} />
    </>
  );
};

export default ParentHeroBanner;
