import React from 'react';
import ListedAgent from './ListedAgent.jsx';
import PremierAgent from './PremierAgent.jsx';
import axios from 'axios';

// styled components
import { Ad } from '../styles.js';


class AllAgents extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lAgent: {},
      pAgent0: {},
      pAgent1: {},
      pAgent2: {},
      pAgent0ID: this.props.houseId + 1 || Math.floor(Math.random() * 1000),
      pAgent1ID: this.props.houseId + 2 || Math.floor(Math.random() * 1000),
      pAgent2ID: this.props.houseId + 3 || Math.floor(Math.random() * 1000),
    };
  }
  componentDidMount() {

    //get listed agent
    axios.get(`/houseId/listedAgent/${this.props.houseId}`)
      .then(response => {

        // response is of type string
        // [{"id":101,"house_id":100,"agent_name":"Arch Weber","agitgent_company":"Bechtelar, Gislason and Schuppe","agent_phone":"(236) 089-1945 x509","agent_url":"http://lorempixel.com/640/480/people
        const listAgent = response.data[0];
        this.setState({ lAgent: listAgent });
      });
    //get first premier agent
    axios.get(`/houseId/premierAgents/${this.state.pAgent0ID}`)
      .then(response => {
        this.setState({
          pAgent0: response.data[0]
        })
      })
      .catch((e) => {
        console.log(e)
      })
    //get second premier agent
    axios.get(`/houseId/premierAgents/${this.state.pAgent1ID}`)
      .then(response => {
        this.setState({
          pAgent1: response.data[0]
        })
      })
      .catch((e) => {
        console.log(e)
      })
    //get third premier agent
    axios.get(`/houseId/premierAgents/${this.state.pAgent2ID}`)
      .then(response => {
        this.setState({
          pAgent2: response.data[0]
        })
      })
      .catch((e) => {
        console.log(e)
      })
  }

  render() {
    return (
      <div>
        <ListedAgent lAgent={this.state.lAgent} />
        <PremierAgent pAgents={this.state.pAgent0} />
        <PremierAgent pAgents={this.state.pAgent1} />
        <PremierAgent pAgents={this.state.pAgent2} />
        <Ad>Learn how to appear as the agent above</Ad>
      </div>
    )
  }
};

export default AllAgents;