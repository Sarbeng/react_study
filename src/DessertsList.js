function DessertsList(props) {
    // Implement the component here.
    const dessertItems = props.data.filter(dessert => dessert.calories < 500).sort((a,b) => a.calories - b.calories ).map(dessert => {
      return <li>{dessert.name} - {dessert.calories} cal</li>
    })

    const desserts = [
        {
          title: 'Chocolate Cake',
          description: 'Chocolate cake is a cake flavored with melted chocolate',
          calories: 500,
        }
      ];
      
      const newDesserts = desserts.map((dessert) => {
        return {
          title: dessert.title.toUpperCase(),
          ...dessert,
          kCal: dessert.calories / 1000,
        };
      });

      console.log(newDesserts)
    
    console.log(dessertItems)
    return <ul>
        {dessertItems}
    </ul>;
  }
  
  export default DessertsList;
  