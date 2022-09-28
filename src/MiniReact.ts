import { Component, CreateTxtEleFunc, MyElement, Props} from './types';

class MiniReact{
    render(func: Component, container: HTMLElement){
        const {type, props, children} = func();

        if(type === "TEXT_ELEMENT") return container.appendChild(document.createTextNode(props.nodeValue));

        const node: HTMLElement = document.createElement(type);
        if(props) Object.entries(props).forEach(([key, value]: string[]) => node.setAttribute(key, value));
        children.forEach(child => this.render(child, node));
        container.appendChild(node);
    }

    createElement(type: string, props: Props, children:(Component | string)[]){
        const processedChildren = children.map(child => typeof child === 'string' ? this.createTextElement(child) : child); 
        return {type, props, children: processedChildren};
    }

    private createTextElement(text: string): CreateTxtEleFunc{
        //Returning a function that returns type of MyElement
        return (): MyElement => { return {type: "TEXT_ELEMENT",props: {nodeValue: text}, children: []}};
    }
}

const miniReact = new MiniReact();
export default miniReact;