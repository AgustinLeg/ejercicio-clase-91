import './card.css';

const Card = ({ user }) => {
  return (
    <div className="card">
      <img
        src={
          user.photo ||
          'https://secure.gravatar.com/avatar/10432cb6335abedfea55593fe17c7e33?s=96&d=mm&r=g%22'
        }
        alt="Avatar"
      />
      <div className="card-container">
        <h4>
          <b>{user.name}</b>
        </h4>
        <p>{user.lastName}</p>
      </div>
    </div>
  );
};

export default Card;
