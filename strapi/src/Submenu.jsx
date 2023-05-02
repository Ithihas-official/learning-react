import { useRef } from "react";
import { useAppContext } from "./context";
import sublinks from "./data";

const Submenu = () => {
  const { isPageId, setPageId } = useAppContext();
  const submenuContainer = useRef(null);
  const currentPage = sublinks.find((prop) => {
    return prop.pageId === isPageId;
  });
  const handleMouseLeave = (event) => {
    const { clientX, clientY } = event;
    const targetValue = submenuContainer.current;
    const { bottom, left, right } = targetValue.getBoundingClientRect();
    if (clientX > right + 1 || clientX < left - 1 || clientY > bottom + 1) {
      return setPageId(null);
    }
  };
  return (
    <div
      className={isPageId !== null ? "submenu show-submenu" : "submenu"}
      ref={submenuContainer}
      onMouseLeave={handleMouseLeave}
    >
      <h5>{currentPage?.page}</h5>
      <div className="submenu-links">
        {currentPage?.links?.map((item) => {
          return (
            <a href={item.url} key={item.id}>
              {item.label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
