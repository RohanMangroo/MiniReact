import miniReact from './MiniReact';
import { MyElement } from './types';

export default function NavBar(): MyElement{
    return miniReact.createElement('div', {class: "nav-bar"}, ["NavBar"]);
}