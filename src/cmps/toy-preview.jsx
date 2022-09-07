import { Link } from 'react-router-dom'

export function ToyPreview({ toy, onRemoveToy }) {
    
    const inStock = toy.inStock ? <button className='buy-btn button-73'>Buy</button> : 'Out of Stock'
    const deleteBtn = <button className='del-btn button-73'>Del</button> //temp, move to cart

return (
    <div className='toy-preview'>
        
        <h2>{toy.name} {toy.price} {inStock} {deleteBtn} </h2>
    </div>
)

}