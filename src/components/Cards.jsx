import Card from './Card';

export default function Cards(props) {
   const {characters, onClose} = props
   //!Solo necesito esas dos propiedades, no las demas
   return (
      <div>
         {characters.map((character)=> (
         <Card
         key={character.id} 
         character = {character}
         onClose={onClose}
         />))}
      
   </div>
   );
}
