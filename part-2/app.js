const App = () => {
  return (
    <div>
      <Tweet
        username="krish"
        name="krishna"
        date={new Date().toDateString()}
        message="this is my first tweet"
      />
      <Tweet
        username="neeru"
        name="neerajaa"
        date={new Date().toDateString()}
        message="this is my sec tweet"
      />
      <Tweet
        username="gauth"
        name="gautam"
        date={new Date().toDateString()}
        message="this is my third tweet"
      />
    </div>
  );
};
