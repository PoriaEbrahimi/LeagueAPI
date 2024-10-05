import Card from './Card';
import champs from '../assets/index'
import { useEffect, useState } from 'react';
import './List.css'

function List() {
  const [champions, setChampions] = useState<any>(null);
  useEffect(() => {
    const fetchChampions = async () => {
      const version = '13.1.1'; // Use the latest game version here
      const URL = `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`;

      try {
        const response = await fetch(URL);
        const champions = await response.json();
        setChampions(champions);
        console.log(champions);
      } catch (error) {
        console.error('Error fetching champions:', error);
      }
    };

    fetchChampions();
  }, []);

  return (
    <div className="container text-center">
      <div className="row List">
      {champions && champions.data && Object.values(champions.data).map((champion: any) => (
        <Card img={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`} name={champion.name} />
      ))
      }
      </div>
    </div >
  );
}

export default List;
