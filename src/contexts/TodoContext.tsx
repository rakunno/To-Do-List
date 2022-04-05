import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

type TodoContextProviderProps = {
  children: ReactNode;
};

type TodoContextValues = {
    listTodo: TypeOfArrayDados[];
    addTodo: (v: string) => void;
    removeTodo: (v: number) => void;
    editTodo: (o:object, i:number) => void;
};
type TypeOfArrayDados = {
    title: string;
    description: string;
    date: string;
    hour: string;
    responsable: string;
    status: string;
  }


export const TodoContext = createContext({} as TodoContextValues);

export const TodoContextProvider = ({ children }: TodoContextProviderProps) => {
  const [listTodo, setListTodo] = useState<TypeOfArrayDados[]>([]);

    useEffect(()=>{
        const storage = JSON.parse(localStorage.getItem('dados')??'[]')
        setListTodo(storage);
    },[])


  const addTodo =  (v: string) => {
    const data =  JSON.parse(v);
    const add =  [...listTodo, data];
    localStorage.setItem('dados' ,JSON.stringify(add));
    setListTodo(add);
    
  };

  const removeTodo = (index: number) => {
    listTodo.splice(index, 1)
    setListTodo([...listTodo])
    localStorage.setItem('dados' ,JSON.stringify(listTodo))
};

  const editTodo = (o: any, indice: number) => {
    const data = [...listTodo];
    data.splice(indice, 1, o);
    setListTodo(data)
    localStorage.setItem('dados' ,JSON.stringify(data))
   
  };

  return (
    <TodoContext.Provider
      value={{
        listTodo,
        addTodo,
        removeTodo,
        editTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);
