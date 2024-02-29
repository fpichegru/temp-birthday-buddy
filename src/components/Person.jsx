export default function Person({id , image, name, age}) {
  return (
    <li  className="person">
      <img src={image} alt="" />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </li>
  );
}