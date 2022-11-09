import Meal from "./Meal";

const Category = ({ data, handleCart }) => {
  return (
    <>
      {data.categories.map((elem, index) => {
        return (
          <div key={index} className="categories">
            {elem.meals.length > 0 && (
              <div className="cat-card">
                <h3 className="cat-title">{elem.name}</h3>
                <div className="sub-cats">
                  <Meal elem={elem} handleCart={handleCart} />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Category;
