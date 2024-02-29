import Person from "./Person"


export default function ListPerson({people}) {

  return (
      <ul>
        {people.map((person) => {
          return (
            <Person
              key={person.id}
              image={person.image}
              name={person.name}
              age={person.age}
            />
          );
        })}
      </ul>
   
  );
}