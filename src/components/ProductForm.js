import { useState } from "react";

function ProductForm(props) {
    const[title, setTitle] = useState('')
    const[date, setDate] = useState('')
    function titleChangeHandler(event) {
        setTitle(event.target.value)
    }
    function dateChangeHandler(event) {
        setDate(event.target.value)
    }

    function submitHandler(event) {
        event.preventDefault()
        const productData = {
            title: title,
            date: date,
        }
        console.log(productData);
        setTitle("");
        setDate("");
        props.onSaveProduct(productData)
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={titleChangeHandler} />
            </div>
            <div>
                <label>Title</label>
                <input type="date" min={'2020-01-01'} max={'2023-12-12'} value={date} onChange={dateChangeHandler}/>
            </div>
            <div>
                <button type="submit">Add Product</button>
            </div>
        </form>
    )
}

export default ProductForm