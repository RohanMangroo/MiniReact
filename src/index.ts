const root = document.querySelector<HTMLElement>("#root");
type MyElement = {type: string, props: {[key: string]: string}, children: MyElement[]};

class MiniReact{
    render(element: MyElement, container: HTMLElement){
        const {type, props, children}: MyElement = element;
        const node = document.createElement(type);

        if(props) Object.entries(props).forEach(([key, value]: string[]) => node.setAttribute(key, value));

        children.forEach(child => {
            if(child.type === "TEXT_ELEMENT") {
                const textNode = document.createTextNode(child.props.nodeValue);
                node.appendChild(textNode);
            }
            else this.render(child, node);
        })
        container.appendChild(node);
    }

    createElement(type: string, props: {[key: string]: string}, children: (MyElement|string)[]): MyElement{
        const element = {
            type,
            props,
            children: children.map(child => typeof child === 'string' ? this.createTextElement(child) : child) 
        }
        return element;
    }

    createTextElement(text: string): MyElement{
        const textElement: MyElement = {
            type: "TEXT_ELEMENT",
            props: {nodeValue: text},
            children: [],
        }
       return textElement;
    }
}

const miniReact = new MiniReact();
const element = miniReact.createElement("h1", {class: "main"}, ["Hello World"]);
miniReact.render(element, root);

// type OBJ = {
//     name: string,
//     job: string,
//     children: number[];
// }

// const obj: OBJ = {name: "Rohan", job: "Programmer", children: []};

// console.log(obj);