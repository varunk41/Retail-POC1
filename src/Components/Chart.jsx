import React, { Component } from 'react';
import {Bar, Pie} from 'react-chartjs-2';
import axios from 'axios';
import { filter } from 'rsvp';

export default class PieChartComponent extends Component
{
   constructor(props) {
      super(props);
      this.state = {
        Data: []
      }
    }
       
    componentDidMount() {
      axios.get(`http://www.json-generator.com/api/json/get/cfwIaIYSHm?indent=2`)
        .then(res => {
          const football = res.data;
          let playername = ['DirectoryDatasource','DatabaseDatasource', 'HiveDatasource', 'JMSDatasource' ];
          let b = [];
         
         
      let playerscore = [3,1,4,1];
          football.forEach(element => {
            // playername.push(element.datasourceType);
             playerscore.push(element.datasourceType);
            b[element.datasourceType] = (b[element.datasourceType] || 0) + 1;
            
         
          });
          console.log(b)  ;
          let ps = b;

        console.log(ps)  ;
          this.setState({ 
            Data: {
              labels: playername,
              datasets:[
                 {
                    label:'Data Source Count',
                    data: playerscore ,
                    backgroundColor:[
                     'rgba(255,105,145,0.6)',
                     'rgba(155,100,210,0.6)',
                     'rgba(90,178,255,0.6)',
                     'rgba(240,134,67,0.6)',
                     'rgba(120,120,120,0.6)',
                     'rgba(250,55,197,0.6)'
                  ]
                  
                 }
              ]
           }
           });
        })
    }
 render()
   {
      return(
        <div>
        <Pie
          data={this.state.Data}
          options={{maintainAspectRatio: false}}/>
     </div>
      )
   }
}
