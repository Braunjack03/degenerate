export const changeDirectionWeb = async (e, setState, state) => {
  switch (e.key) {
    case "ArrowLeft":
      if (state.direction === "Right") break;
      setState({
        ...state,
        direction: "Left",
      });
      break;
    case "ArrowUp":
      if (state.direction === "Down") break;
      setState({
        ...state,
        direction: "Up",
      });
      break;
    case "ArrowRight":
      if (state.direction === "Left") break;
      setState({
        ...state,
        direction: "Right",
      });
      break;
    case "ArrowDown":
      if (state.direction === "Up") break;
      setState({
        ...state,
        direction: "Down",
      });
      break;
    default:
      console.log("nothing happened");
  }
};

export const changeDirectionMobile = (value, setState, state) => {
  switch (value) {
    case "panLeft":
      if (state.direction === "Right") return "Right";
      return "Left";
    case "panUp":
      if (state.direction === "Down") return "Down";
      return "Up";
    case "panRight":
      if (state.direction === "Left") return "Left";
      return "Left";
    case "panDown":
      if (state.direction === "Up") return "Up";
      return "Down";
    default:
      console.log("nothing happened");
  }
};
