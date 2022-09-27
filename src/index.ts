import MiniReact from "./MiniReact";

const root = document.querySelector<HTMLElement>("#root");

const miniReact = new MiniReact();
const element = miniReact.createElement("h1", {class: "main"}, ["Hello World"]);
miniReact.render(element, root);