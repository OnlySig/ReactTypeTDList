import { useState } from "react";
import Cronometro from "../components/Cronometro";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import { Itarefa } from "../types/tarefa";
import style from'./App.module.scss';

const App = () => {
  const [tarefas, setTarefas] = useState<Itarefa[]>([]);
  const [ selecionado, setselecionado ] = useState<Itarefa>();
  
  function selecionaTarefa(tarefaSelecionada: Itarefa) {
    setselecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }

  function finalizarTarefa() {
    if(selecionado) {
      setselecionado(undefined)
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefas => {
        if(tarefas.id === selecionado.id) {
          return {
            ...tarefas,
            selecionado: false,
            completado: true
          }
        }
        return tarefas;
      }))
    }
  }
  return (
    <>
      <div className={style.AppStyle}>
        <Formulario setTarefas={setTarefas} />
        <Lista 
          tarefas={tarefas}
          selecionaTarefa={selecionaTarefa}
        />
        <Cronometro 
          selecionado={selecionado}
          finalizarTarefa={finalizarTarefa}
        />
      </div>
    </>
  );
}

export default App;
