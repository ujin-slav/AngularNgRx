export interface ToDo {
    nameOrg? : string;
    inn?: string;
    kpp?: string;
    address?: string;
    surname?: string;
    name?: string;
    patron?: string;
    category?: string;
    okpo?: string;
    site?: string;
}

export interface ToDoContent {
    content: ToDo[];
}
 
export interface State {
    properties: ToDoContent;
  }