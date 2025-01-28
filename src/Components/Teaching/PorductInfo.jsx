const PorductInfo = () => {
   
    const product = {
        productName: "iPhone 12",
        price: 799,
        availability: "In Stock"
    }

    return (
        <div>
            <h2>Product Details: </h2>
            <p>Product Name: { product.productName }</p>
            <p>Price: { product.price }</p>
            <p>Availability: { product.availability }</p>

        </div>
    )
}

export default PorductInfo