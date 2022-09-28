import miniReact from './MiniReact';
import { MyElement } from './types';
import NavBar from './NavBar';

export default function App(): MyElement {
  return  miniReact.createElement('div', { class: 'main' }, [NavBar, "Hello"]);
}
