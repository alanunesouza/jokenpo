import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';
import Topo from './src/components/Topo';
import Icone from './src/components/Icone';


export default class app2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      escolhaUsuario: '',
      escolhaComputador: '',
      resultado: ''
    };
  }

  jokenpo(escolhaUsuario) {
    let numAleatorio = Math.floor(Math.random() * 3);
    let escolhaComputador = '';

    switch(numAleatorio) {
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
    }

    let resultado = '';

    if (escolhaComputador === 'pedra') {
      if (escolhaUsuario === 'pedra') {
        resultado = 'Empate';
      } else if (escolhaUsuario === 'papel') {
        resultado = 'Você ganhou';
      } else {
        resultado = 'Você perdeu';
      }
    }

    if (escolhaComputador === 'papel') {
      if (escolhaUsuario === 'papel') {
        resultado = 'Empate';
      } else if (escolhaUsuario === 'tesoura') {
        resultado = 'Você ganhou';
      } else {
        resultado = 'Você perdeu';
      }
    }

    if (escolhaComputador === 'tesoura') {
      if (escolhaUsuario === 'tesoura') {
        resultado = 'Empate';
      } else if (escolhaUsuario === 'pedra') {
        resultado = 'Você ganhou';
      } else {
        resultado = 'Você perdeu';
      }
    }

    this.setState({ escolhaUsuario, escolhaComputador, resultado });
  }

  render() {
    return (
      <View style={styles.container}>

        <Topo></Topo>

        <View style={styles.painelAcoes}>
          <View style={styles.buttons}>
            <Button color="#FFF" title="PEDRA" onPress={() => { this.jokenpo('pedra') }} />
          </View>

          <View style={styles.buttons}>
            <Button color="#FFF" style={styles.buttons} title="PAPEL" onPress={() => { this.jokenpo('papel') }} />
          </View>

          <View style={styles.buttons}>
            <Button color="#FFF" style={styles.buttons} title="TESOURA" onPress={() => { this.jokenpo('tesoura') }} />
          </View>
        </View>

        <View style={styles.palco}>
          <Text style={styles.resultado}>{this.state.resultado}</Text>
          <Icone escolha={this.state.escolhaComputador} jogador='Computador'></Icone>
          <Icone escolha={this.state.escolhaUsuario} jogador='Você'></Icone>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttons: {
    flex: 1,
    margin: 5,
    backgroundColor: '#266AC3',
  },
  palco: {
    alignItems: 'center',
    marginTop: 10,
  },
  resultado: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D12B2B',
    height: 60,
  }
});

AppRegistry.registerComponent('app2', () => app2);
