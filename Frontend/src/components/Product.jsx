

function Product({item}){
    return(
    

        <div className="card-group"  style={{ width: '18rem' }}>
            <div className="card">
                <div className="card-body">
                <h4 className="card-title">{item.name}</h4>
                <p  className="card-text">precio: {item.price} </p> 
                <p  className="card-text">categoria: {item.category}</p>
                </div>
            </div>
        </div>
        
      
    )
}

export default Product