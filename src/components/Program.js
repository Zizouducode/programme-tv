const Program = ({ data }) => {
  return (
    <div>
      {data.map((elem, index) => {
        return (
          <div key={index}>
            <div>
              <div className="tv-show">
                <div className="time">{elem.time}</div>
                <div className="image">
                  <img src={elem.image} alt="tv show" />
                </div>
                <div className="info">
                  <p className="title">{elem.title} </p>
                  <p className="type">{elem.type}</p>
                  <div className="details">
                    <p className="duration">{elem.duration}</p>
                    {elem.direct ? <p className="direct">Direct</p> : ""}
                    {elem.isUnseen ? <p className="unseen">Inédit</p> : ""}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <hr />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Program;
