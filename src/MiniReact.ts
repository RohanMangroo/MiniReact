type Props = {[key: string]: string};
type MyElement = {type: string, props: Props, children: MyElement[]};

class MiniReact{
    render(element: MyElement, container: HTMLElement){
        const {type, props, children}: MyElement = element;
        const node = document.createElement(type);
        this.addProps(node, props);
        this.addChildren(node, children);
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

    private createTextElement(text: string): MyElement{
        const textElement: MyElement = {
            type: "TEXT_ELEMENT",
            props: {nodeValue: text},
            children: [],
        }
       return textElement;
    }

    private addProps(node: HTMLElement, props: Props) {
        if(props) Object.entries(props).forEach(([key, value]: string[]) => node.setAttribute(key, value));
      }
    
    private addChildren(node: HTMLElement, children: MyElement[] ){
        children.forEach(child => {
            if(child.type === "TEXT_ELEMENT") {
                const textNode = document.createTextNode(child.props.nodeValue);
                node.appendChild(textNode);
            }
            else this.render(child, node);
        })
    } 
}

export default MiniReact;