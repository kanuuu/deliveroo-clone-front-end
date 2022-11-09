const Hero = ({ data }) => {
  return (
    <div className="header-rest">
      <div className="header-left">
        <h1 className="rest-title">{data.restaurant.name}</h1>
        <h2 className="rest-desc">{data.restaurant.description}</h2>
      </div>

      <img src={data.restaurant.picture} className="header-image" alt="" />
    </div>
  );
};

export default Hero;
