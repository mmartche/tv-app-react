import React from 'react';
import './App.css';
import DadooCanais from './lista-de-canais.json';



class Tela extends React.Component {
    async componentDidMount() {
        // console.warn(this.props.navigation.state);
    };
    async componentWillMount() {
        this.listaCanais = this.state.listaDados.canal.map((canal,index) =>
        <li key={index}>
            {index}
            <br />
            {canal.nome}
            <br />
            <span className="ativo"> ativo?</span><span> {canal.active} </span>
            <br />
            foto: {canal.foto}
          </li>
        );
    }
    static propTypes = {
        
    };
    state = {
        listaDados: DadooCanais,
        localTerm: this.props.initialLocalTerm,
        phone: '',
        posicaoInicial: 0,
    };
    getIndex = (value, arr) => {
        console.log('getIndex',value,arr)
      for(var i = 0; i < arr.length; i++) {
          console.log(arr[i],value)
          if(arr[i] === value) {
              return i;
          }
      }
      return -1; //to handle the case where the value doesn't exist
    }
    handleChange = (e) => {
        /*
        e.keyCode
        37=esquerda
        38=cima
        39=direita
        40=baixo
        */
       switch (e.keyCode) {
           case (39) :
               console.log('DIREITA', this.getIndex(this.state.posicaoInicial, this.state.listaDados.canal))
               this.setState(( state ) => {
                   state.posicaoInicial++
                });
                // this.state.listaDados.canal[this.state.posicaoInicial].active = "true"
                // console.log('.....',this.state.listaDados.canal[this.state.posicaoInicial].active )
                break
            case (37) :
                this.setState(( state ) => {
                    state.posicaoInicial--
                });
                console.log('esquerda',this.state.posicaoInicial,e.keyCode)
                break
            case (38) :
                console.log('up')
                break
            case (40) :
                console.log('key down')
                break
            default :
                console.log('nadadadada')
        }
        
        this.setState(( state ) => {
            state.listaDados.canal[this.state.posicaoInicial].active = "true"
        });
        console.log('to nesse:',this.state.posicaoInicial,this.state.listaDados.canal[this.state.posicaoInicial])
    };
    render(){
        return (
            <div>
                <input onKeyUp={this.handleChange}  />

                <ul className="lista-d-canais">
                    {this.listaCanais}
                </ul>
            </div>
        );
    }
}

export default Tela;
