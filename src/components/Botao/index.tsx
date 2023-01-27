import React from "react";
import style from './Botao.module.scss';
//essa é a forma antiga de criar uma "função" com o react, os outros componentes estão da forma atualizada.

interface Props {
  type?: "button" | "submit" | "reset" | undefined,
  children?: React.ReactNode,
  onClick?: () => void
}

function Botao({ onClick, type, children }: Props) {
  return(
      <button 
        onClick={onClick}
        type = {type}
        className={style.botao}
      >
       {children}
      </button>
  )
}


export default Botao;

/**
 * Forma Antiga
 * 
 * class Botao extends React.Component <{children: React.ReactNode, type?: "button" | "submit" | "reset" | undefined, onClick?: () => void}>{
  render() {
    const { type = "button", onClick } = this.props
    return (
      <button onClick={onClick} type = {type} className={style.botao}>
        {this.props.children}
      </button>
    )
  }
}
 * 
 */