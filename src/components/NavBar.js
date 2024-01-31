import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const newLinks = links.map((element) => {
    return <a key={element} href={`#${element}`}>{element}</a>;
  })
  return (
     <nav>
      {newLinks}
    </nav>
  );
}

export default NavBar;
