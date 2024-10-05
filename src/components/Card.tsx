import './Card.css';

interface Props {
  img: string,
  name: string
}

function Card({ img, name }: Props) {
  return (
    <div className="card Card">
      <img src={img} className="card-img-top Image" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
}

export default Card;
