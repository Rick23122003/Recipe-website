import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to RecipeShare 🍽️</h1>
      <p style={styles.text}>
        Discover delicious recipes from around the world and share your own!
      </p>
      <button style={styles.exploreButton} onClick={() => navigate("/recipes")}>
        Explore Recipes
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "100px 20px", // Adjusted padding for fixed Navbar
    background: "linear-gradient(135deg, #ff9a9e, #fad0c4)", // Lighter gradient for distinction
    color: "#2c3e50",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  text: {
    fontSize: "1.2rem",
    marginBottom: "30px",
    maxWidth: "600px",
  },
  exploreButton: {
    backgroundColor: "#2c3e50",
    color: "white",
    fontSize: "1.2rem",
    padding: "12px 25px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default Home;
