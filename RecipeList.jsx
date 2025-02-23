const recipes = [
  { id: 1, title: "Spaghetti Bolognese", image: "https://source.unsplash.com/400x300/?pasta" },
  { id: 2, title: "Chocolate Cake", image: "https://source.unsplash.com/400x300/?cake" },
  { id: 3, title: "Grilled Salmon", image: "https://source.unsplash.com/400x300/?salmon" },
];

const Recipes = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🍳 Recipe List</h1>
      <div style={styles.grid}>
        {recipes.map((recipe) => (
          <div key={recipe.id} style={styles.card}>
            <img src={recipe.image} alt={recipe.title} style={styles.image} />
            <h3 style={styles.title}>{recipe.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "50px 20px",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#ff4b2b",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    padding: "20px",
    maxWidth: "900px",
    margin: "auto",
  },
  card: {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "0.3s",
  },
  image: {
    width: "100%",
    borderRadius: "8px",
  },
  title: {
    marginTop: "10px",
    fontSize: "1.3rem",
    color: "#333",
  },
};

export default Recipes;
