import Title from "./Title";
import menu from "./data.js";
import { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const filterCategory = menu.filter((item) => item.category === category)
    setMenuItems(filterCategory);
  };

  return (
    <main>
      <section className="menu">
        <Title text={"today's menu"} />
        <Categories categories={allCategories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
