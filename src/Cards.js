const Card = ({ title, content, color }) => {
  const cardStyle = {
    width: '18rem',
    margin: '10px',
    backgroundColor: color || 'white', // Use the specified color or default to white
  };

  return (
    <div className="card" style={cardStyle}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
};

export default Card;