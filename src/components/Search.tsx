import { useEffect, useState } from 'react';
import './Search.css';
import List from './List';

function Search() {
  const [allChampArr, setAllChampArr] = useState<any[]>([]);
  const [champArr, setChampArr]= useState<any[]>([]);
  const [text, setText] = useState<string>('');

  useEffect(() => {

    const fetchChampions = async () => {
      const version = '13.1.1'; // Use the latest game version here
      const URL = `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`;

      try {
        const response = await fetch(URL);
        const champions = await response.json();
        const newChampArr = Object.values(champions.data).map((champ: any) => {
          return {
            name: champ.name, 
            id: champ.id
          }
        })
        setAllChampArr([...newChampArr])
        setChampArr([...newChampArr])
      } catch (error) {
        console.error('Error fetching champions:', error);
      }
    };

    fetchChampions();
  }, []);

  const changeText = (text: string) => {
    setChampArr([])
    if (text) {
      setText(text)
      const newChampArr = allChampArr.filter((champ: any) => {
        return champ.name.toLowerCase().startsWith(text.toLowerCase())
      })
      setChampArr(newChampArr)
    } else {
      setChampArr(allChampArr)
    }
  }

  return (
    <div className="input-group my-5 Search">
      <input
        type="text"
        className="form-control"
        placeholder="Champion name"
        aria-label="Champion name"
        aria-describedby="button-addon2"
        onChange={(e) => (changeText(e.target.value))}
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
      >
        Button
      </button>
      <List champArr={champArr} />
    </div>
  );
}



export default Search;