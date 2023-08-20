import React, { useState } from "react";
import { useParams } from "react-router-dom";
import classes from '../style/productdetails.module.css';

const ProductDetails = ({ products }) => {
  const { index } = useParams();
  const product = products[index];
  const [mainImage, setMainImage] = useState(product.imageUrl);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleSmallImageClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className={classes.productDetails}>
      <div className={classes.smallImages}>
        <img
          src={product.image1}
          alt={product.title}
          className={classes.smallImage}
          onMouseOver={() => handleSmallImageClick(product.image1)}
        />
        <img
          src={product.image2}
          alt={product.title}
          className={classes.smallImage}
          onMouseOver={() => handleSmallImageClick(product.image2)}
        />
        <img
          src={product.imageUrl}
          alt={product.title}
          className={classes.smallImage}
          onMouseOver={() => handleSmallImageClick(product.imageUrl)}
        />
      </div>
      <div className={classes.mainImage}>
        <img src={mainImage} alt={product.title} className={classes.image} />
      </div>
      <div className={classes.details}>
        <h2>{product.title}</h2>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
