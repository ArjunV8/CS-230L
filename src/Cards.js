const Card = ({ title, content, color }) => {
  const cardStyle = {
    width: '36rem',
    margin: '10px',
    backgroundColor: color || 'white', 
  };

  const contentStyle = {
    color: color || 'white',
  };

  return (
    <div className="card" style={cardStyle}>
      <div className="card-body" style={contentStyle}>
      
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        </div>
      </div>
  );
};

export default Card;