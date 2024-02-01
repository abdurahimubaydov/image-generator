
  
export interface IImage {
    url: string
}


  
interface IValue {
    value: string,
    setValue: any,
    searchImage: () => Promise<void>;
}


export default IValue