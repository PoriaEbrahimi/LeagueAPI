import Card from "./Card";
import champs from '../assets/index'
import { useEffect } from "react";

function List() {

  useEffect(() => {
    const fetchChampions = async () => {
      const version = '13.1.1'; // Use the latest game version here
      const URL = `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`;


      try {
        const response = await fetch(URL);
        const data = await response.json();
      } catch (error) {
        console.error('Error fetching champions:', error);
      }
    };    
    
    fetchChampions();
  });

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
