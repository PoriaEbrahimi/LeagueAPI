import Card from './Card';
import { useEffect, useState } from 'react';
import './List.css'

interface Props {
  champArr: string[]
}

function List({ champArr }: Props) {
  const [champions, setChampions] = useState<any>(null);
  useEffect(() => {

    const fetchChampions = async (champ: string) => {
      const version = '13.1.1'; // Use the latest game version here
      const URL = `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion/${champ}.json`;

      try {
        const response = await fetch(URL);
        const champions = await response.json();
        setChampions(champions);
      } catch (error) {
        console.error('Error fetching champions:', error);
      }
    };

    champArr.map((champ: string) => {
      fetchChampions(champ);
    })

  }, []);

  return (
    <div className="container text-center">
      <div className="row List">
        {champArr.map((champion: any) => (
          <Card img={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`} name={champion.name} />
        ))
        }
      </div>
    </div >
  );
}

export default List;
