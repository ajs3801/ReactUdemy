// import Link
import { Link } from "react-router-dom";

// import Component
import ProductCard from '../product-card/product-card.component';

// import style file
import './category-preview.styles.scss';

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className='title' to={title}>{title.toUpperCase()}</Link>
      </h2>

      <div className="preview">
        {
          products
            .filter((_, idx) => idx < 4)
            .map((product) => (<ProductCard key={product.id} product={product}/>))
        }
      </div>
    </div>
  );
};

export default CategoryPreview;