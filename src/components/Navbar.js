import React from "react";
import BottomAppBar from "./AppBar";
import { CSSTransition } from "react-transition-group";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      appearNavbar: true
    };
  }
  
    return (
      <CSSTransition
        in={appearNavbar}
        appear={true}
        timeout={300}
        classNames="fade"
      >
        <BottomAppBar />
      </CSSTransition>
    );
  }
}

export default Navbar;
