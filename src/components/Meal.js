import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Meal = ({ elem, handleCart }) => {
  return (
    <>
      {elem.meals.map((elem, index) => {
        return (
          <div
            key={index}
            className="item"
            onClick={() => {
              handleCart(elem, "+");
            }}
          >
            <div className="card-header">
              <div className="card-header-title">
                <div className="item-title">{elem.title}</div>
                <div className="item-desc">{elem.description}</div>
                <div className="card-footer">
                  <div className="item-price">$ {elem.price}</div>
                  {elem.popular && (
                    <div className="item-popular">
                      <FontAwesomeIcon icon="fa-star" /> Populaire
                    </div>
                  )}
                </div>
              </div>
              {elem.picture && (
                <img src={elem.picture} className="card-image" alt="" />
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Meal;
