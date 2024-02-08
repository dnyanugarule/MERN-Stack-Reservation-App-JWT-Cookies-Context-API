import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="/kashmir.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Kashmir</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="/SHRILANKA.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Shrilanka</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="/united state.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>America</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
