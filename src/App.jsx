import { useState, useEffect } from 'react';
import './App.css';
import PetCard from './components/PetCard';
import { fetchPets } from './services/petService';

function App() {
  const [pets, setPets] = useState([]);

  // Step 3: Using useEffect to fetch pets when component loads
  useEffect(() => {
    const getPets = async () => {
      const data = await fetchPets();
      setPets(data);
    };
    
    getPets();
  }, []);

  return (
    <div className="App">
      <h1>Pet Gallery</h1>
      <div className="pet-container">
        {pets.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
}

export default App;