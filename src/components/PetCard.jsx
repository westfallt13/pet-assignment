function PetCard({ pet }) {
  // Step 4: Destructuring in one line
  const { name, breed, image_url } = pet;
  
  return (
    <div className="pet-card">
      <img src={image_url} alt={name} />
      <h3>{name}</h3>
      <p>{breed}</p>
    </div>
  );
}

export default PetCard;