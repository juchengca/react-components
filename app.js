// TODO

const { useState } = React;

const GroceryListItem = (props) => {

  const [isDone, setIsDone] = useState(false);

  const style = {
    //textDecoration: isDone ? 'line-through' : 'none',
    fontWeight: isDone ? 'bold' : 'normal'
  };

  return (
    <li style={style} onMouseEnter={() => setIsDone(!isDone)}>
      {props.item}
    </li>
  );

};

const GroceryList = (props) => (
  <ul>
    {props.items.map((item) => (
      <GroceryListItem item={item} />
    ))}
  </ul>
);

const App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList items={['Lemons', 'Potatoes', 'Soda']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));