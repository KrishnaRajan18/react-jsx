const Person = props => {
  const vote = props.age < 18 ? "GO TO SCHOOL" : "GO VOTE";
  const hobbies = props.hobbies.map(t => <li>{t}</li>);
  return (
    <div>
      <p>Some information about this person:</p>
      <ul>
        <li>Name: {props.name.slice(0, 6)}</li>
        <li>Age: {props.age}</li>
        <l1>
          <ul>
            Hobbies:
            {hobbies}
          </ul>
        </l1>
      </ul>
      <h3>{vote}</h3>
    </div>
  );
};
