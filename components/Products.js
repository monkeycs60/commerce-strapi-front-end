import { ProductStyle } from "@/styles/ProductStyle";
import Link from "next/link";

const Products = ({ product }) => {
  const { title, description, price, slug, image } = product.attributes;

  return (
    <ProductStyle>
    <Link href={`/product/${slug}`}>
      <div className="img-container">
        <img
          src={image.data.attributes.formats.small.url}
          alt={title}
        />
      </div>
    </Link>
      <h2>{title}</h2>
      <h3>{price}</h3>
      <p>{description}</p>
    </ProductStyle>
  );
};

export default Products;
