
const FoodCard = ({item}) => {
    const {image,price,recipe,name}=item;

    return (
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <p className="bg-slate-900 absolute right-0 mr-4 mt-4"> ${price} </p>
  <div className="card-body text-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Add To Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;