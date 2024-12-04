import './Newproduct.css'
import ProductForm from './ProductForm'

function Newproduct(props) {
    function saveProduct(product){
        console.log("inside newProduct");
        props.getData(product)
    }
    return (
        <div>
            <ProductForm onSaveProduct = {saveProduct}></ProductForm>
        </div>
    )
}

export default Newproduct