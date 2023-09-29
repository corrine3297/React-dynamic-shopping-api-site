import React, { useState } from 'react';
import MyStyles from '../components/MyStyles.module.css';
import './CreateProduct.css';


function CreateProduct() {
    const [productDetail, setProductDetail] = useState({
        ProductName: "",
        ProductType: "",
        ProductDescription: "",
        ProductPrice: "",
        ProductQuantity: ""

    })

    const [ProductName, setProductName] = useState("")
    const [ProductType, setProductType] = useState("")
    const [ProductDescription, setProductDescription] = useState("")
    const [ProductPrice, setProductPrice] = useState("")
    const [ProductQuantity, setProductQuantity] = useState("")

    const [isProductNameValid, setIsProductNameValid] = useState(true)
    const [isProductTypeValid, setIsProductTypeValid] = useState(true)
    const [isProductDescriptionValid, setIsProductDescriptionValid] = useState(true)
    const [isProductPriceValid, setIsProductPriceValid] = useState(true)
    const [isProductQuantityValid, setIsProductQuantityValid] = useState(true)

    const handleReset = (e) => {
        
       setProductName("")
       setProductType("")
       setProductDescription("")
       setProductPrice("")
       setProductQuantity("")
       setProductDetail({
        ProductName: "",
        ProductType: "",
        ProductDescription: "",
        ProductPrice: "",
        ProductQuantity: ""

    })
    console.log(productDetail);
    e.preventDefault()
    }
    const addProduct = (e) => {
        e.preventDefault()
        if (!ProductName || !ProductType || !ProductDescription || !ProductPrice || !ProductQuantity) {
            alert("Please fill the form completely")
        }
        else {
            alert(
                `
                Product details

                ProductName: ${ProductName},
                ProductType:  ${ProductType},
                ProductDescription: ${ProductDescription},
                ProductPrice:  ${ProductPrice},
                ProductQuantity:  ${ProductQuantity},
                `
            )
        }
        console.log(productDetail)
    }

    const validateInput = (e) => {
        const { value, name } = e.target
        if (name === "ProductName") {
            if (!!value.match(/^[A-Za-z]+$/)) {
                setProductName(value)
                setIsProductNameValid(true)
                setProductDetail({ ...productDetail, [name]: value })
            }
            else {
                if (value === "") {
                    setIsProductNameValid(true)

                }
                else {
                    setIsProductNameValid(false)
                }
            }
        }
        else if (name === "ProductType") {
            if (!!value.match(/^[A-Za-z]+$/)) {
                setProductType(value)
                setIsProductTypeValid(true)
                setProductDetail({ ...productDetail, [name]: value })
            }
            else {
                if (value === "") {
                    setIsProductTypeValid(true)

                }
                else {
                    setIsProductTypeValid(false)
                }
            }
        }
        else if (name === "ProductDescription") {
            if (!!value.match(/^[A-Za-z0-9]*$/)) {
                setProductDescription(value)
                setIsProductDescriptionValid(true)
                setProductDetail({ ...productDetail, [name]: value })

            }
            else {
                if (value === "") {
                    setIsProductDescriptionValid(true)

                }
                else {
                    setIsProductDescriptionValid(false)
                }

            }

        }
        else if (name === "ProductPrice") {
            if (!!value.match(/^\d{0,8}(\.\d{1,4})?$/)) {
                setProductPrice(value)
                setIsProductPriceValid(true)
                setProductDetail({ ...productDetail, [name]: value })

            }
            else {
                if (value === "") {
                    setIsProductPriceValid(true)

                }
                else {
                    setIsProductPriceValid(false)
                }

            }
        }
        else {
            if (!!value.match(/^\d+$/)) {
                setProductQuantity(value)
                setIsProductQuantityValid(true)
                setProductDetail({ ...productDetail, [name]: value })

            }
            else {
                if (value === "") {
                    setIsProductQuantityValid(true)

                }
                else {
                    setIsProductQuantityValid(false)
                }

            }


        }

    }


    return (
        <>
            {/* Product adding section */}
            <div className={MyStyles.productContainer}>
                <div className={MyStyles.productTitle}>
                    Add New Product
                </div>
                <form >
                    <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                        <div className="form-container" >

                            <div className='row'>
                                <div className="col-6 poster">
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" name="ProductName" id="productName" value={ProductName||""} placeholder="Product Name"
                                            onChange={(e) => validateInput(e)}
                                        />
                                        <label for="productName">Product Name</label>
                                        {
                                            !isProductNameValid &&
                                            <div className='mb-3 text-danger'>**Must contain letters only for Product name</div>
                                        }
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" name="ProductType"  id="productType" value={ProductType||""} placeholder="Product Type"
                                            onChange={(e) => validateInput(e)}
                                        />
                                        <label for="productType">Product Type</label>
                                        {
                                            !isProductTypeValid &&
                                            <div className='mb-3 text-danger'>**Must contain letters only for Product Type</div>
                                        }
                                    </div>
                                    <div className="form-floating mb-3">
                                        <textarea type="text" class="form-control h-25" rows="5" name="ProductDescription" id="productDescription"  value={ProductDescription||""}placeholder="Product Description"
                                            onChange={(e) => validateInput(e)}
                                        />
                                        <label for="productDescription">Product Description</label>
                                        {
                                            !isProductDescriptionValid &&
                                            <div className='mb-3 text-danger'>**Must contain letters and number for Product Description</div>
                                        }
                                    </div>
                                </div>
                                <div className="col-6 poster">
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" name="ProductPrice"  value={ProductPrice||""} id="productPrice" placeholder="Product Price"
                                            onChange={(e) => validateInput(e)}
                                        />
                                        <label for="productPrice">Product Price</label>
                                        {
                                            !isProductPriceValid &&
                                            <div className='mb-3 text-danger'>**Must contain numbers only for Product price</div>
                                        }
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" name="ProductQuantity" id="productQuantity" value={ProductQuantity||""} placeholder="Product Quantity"
                                            onChange={(e) => validateInput(e)}
                                        />
                                        <label for="productQuantity">Product Quantity</label>
                                        {
                                            !isProductQuantityValid &&
                                            <div className='mb-3 text-danger'>**Must contain numbers only for Quantity </div>
                                        }
                                    </div>
                                    <div className='form-floating' style={{ marginTop: "60px", display: 'flex', flexWrap: 'nowrap', justifyContent: 'flex-end' }}>
                                        {/* <input className={MyStyles.landingButton} style={{marginRight:'20px'}} type="submit" value='submit' /> */}
                                        <input className={MyStyles.landingButton} onClick={addProduct} type="submit" style={{ marginRight: '10px' }} />
                                        <button  className={MyStyles.landingButton} onClick={(e)=>handleReset(e)} >clear</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </form>

            </div>
        </>
    )
}

export default CreateProduct