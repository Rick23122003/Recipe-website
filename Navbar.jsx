import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>🍽️ RecipeShare</h1>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/recipes" style={styles.link}>Recipes</Link>
        <Link to="/add-recipe" style={styles.link}>Add Recipe</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    backgroundColor: "#2c3e50", // Darker shade for distinction
    color: "white",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Shadow effect
    // Keeps Navbar fixed at the top
    width: "97%",
    height:"10%",
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: "1.8rem",
    fontWeight: "bold",
  },
  link: {
    marginLeft: "20px",
    textDecoration: "none",
    color: "white",
    fontSize: "1.2rem",
    fontWeight: "500",
    transition: "color 0.3s",
  },
};

export default Navbar;
