import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import axios from 'axios';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import {Graph} from 'react-charts';
import {Doughnut, Bar} from 'react-chartjs-2';
import Chart from './Chart';


// const  data1 = {
//     labels: [
//         'Failed',
//         'Sucess',
//         'Inprogess'
//     ],
//     datasets: [{
//         data: [300, 50, 100],
//         backgroundColor: [
//         '#FF6384',
//         '#36A2EB',
//         '#FFCE56'
//         ],
//         hoverBackgroundColor: [
//         '#FF6384',
//         '#36A2EB',
//         '#FFCE56'
//         ]
//     }]
// };

export default class KyloDemo extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            kylodetails: []
        }
      }



         

 componentDidMount() {
                    axios.get(`http://www.json-generator.com/api/json/get/cfwIaIYSHm?indent=2`)
                    .then(res => {
                        console.log(res.data);
                        const kylodetails = res.data;
                        this.setState({ kylodetails });
                    
                    })
      }

    render(){
    return(
    <div>
        {/* <Doughnut kylodetails={this.state.kylodetails.datasourceType}
                                    width={19}
                                    height={10}
                                    options={{
                                                legend:{display:true},
                                                title:{
                                                    display:true
                                                },
                                                labels: {
                                                    fontColor: "#fff",
                                                    fontSize: 20
                                                }
                                                
                                            }}
                            /> */}
        <Chart/>
        <Table   responsive bordered striped style={{width:"100%",borderSpacing: "0px",marginTop: "50px",color: "black"}}>
        <tbody> {this.state.kylodetails.map( function (kylodetail, key) {
            return(
                    <tr key={ kylodetail.id}>            
                        <td>{ kylodetail.properties['jcr:created']} </td> 
                        <td>{ kylodetail.properties['Input Directory']} </td> 
                        <td>{ kylodetail.properties['jcr:primaryType']} </td> 
                        <td>{ kylodetail.properties['jcr:createdBy']} </td> 
                        <td>{ kylodetail.properties['File Filter']} </td> 
                        <td>{ kylodetail.description} </td> 
                        <td>{ kylodetail.encrypted} </td>  
                        <td>{ kylodetail.compressed} </td> 
                        <td>{ kylodetail.datasourceType} </td> 
                        <td>{ kylodetail['@type']} </td> 
                        <td>{ kylodetail.name} </td>   
                    </tr>
                )
            })}
        </tbody>
        </Table>
        {/* <Graph names={this.state.kylodetails.datasourceType}/> */}







    </div>

        )
    }
}