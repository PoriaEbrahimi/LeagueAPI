import Card from "./Card";
import champs from '../assets/index'

function List() {
  let champions = [champs.Aatrox, champs.Garen, champs.Illaoi]
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col"><Card img={champions[0]} name="Aatrox"/></div>
        <div className="col"><Card img={champions[1]} name="Garen"/></div>
        <div className="col"><Card img={champions[2]} name="Illaoi"/></div>
      </div>
      <div className="row">
        <div className="col"><Card img={champions[0]} name="Aatrox"/></div>
        <div className="col"><Card img={champions[1]} name="Garen"/></div>
        <div className="col"><Card img={champions[2]} name="Illaoi"/></div>
      </div>
      <div className="row">
        <div className="col"><Card img={champions[0]} name="Aatrox"/></div>
        <div className="col"><Card img={champions[1]} name="Garen"/></div>
        <div className="col"><Card img={champions[2]} name="Illaoi"/></div>
      </div>
    </div>
  );
}

export default List;
