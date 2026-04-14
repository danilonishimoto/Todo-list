import { Button } from "../Button";
import { TextInput } from "../TextInput";
import './todo-form.style.css'


export function ToDoForm({onSubmit}) {
  return (
    <form className="dialog-form" action={onSubmit}>
      <TextInput
      name="description" 
      required
      placeholder="Digite o item que deseja adicionar" />
      <Button>Salvar item</Button>
    </form>
  );
}
