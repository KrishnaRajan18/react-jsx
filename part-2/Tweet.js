const Tweet = props => {
  return (
    <div>
      <span>Name:{props.name}</span>
      <br></br>
      <span>Username:{props.username}</span> <br></br>
      <span>Date:{props.date}</span> <br></br>
      <p>Message:{props.message}</p>
    </div>
  );
};
