export type Props = {[key: string]: string};
export type MyElement = {type: string, props: Props, children: (Component | CreateTxtEleFunc)[]};
export type Component = () => MyElement;
export type CreateTxtEleFunc = () => MyElement;