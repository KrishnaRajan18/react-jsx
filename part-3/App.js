const App = () => {
  return (
    <div>
      <Person
        name="krishna"
        age={18}
        hobbies={["bowling", "watching tv", "reading"]}
      />

      <Person
        name="gautam"
        age={10}
        hobbies={["dancing", "watching tv", "cooking"]}
      />

      <Person
        name="neerja"
        age={26}
        hobbies={["bowling", "watching tv", "drinking beer"]}
      />
    </div>
  );
};
