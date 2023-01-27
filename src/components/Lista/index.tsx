import { Itarefa } from '../../types/tarefa';
import Item from './Item';
import style from './Lista.module.scss';

interface Props {
  tarefas: Itarefa[]
  selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}

function Lista({ tarefas, selecionaTarefa }: Props) {
  //para renderizar um elemento js(q nesse caso é um array) em jsx(q seria um "html"), para isso precisa percorrer esse array retornando seus respectivos elementos html dentro desse array e a função pra fazer isso se chama ---> map() <---.
  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((item) => (
          <Item
            selecionaTarefa={selecionaTarefa}
            key={item.id}
            {...item}
          />
        ))} 
      </ul>
    </aside>
  )
}

export default Lista;