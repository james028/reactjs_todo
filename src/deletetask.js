import React from 'react'

//xport default class DeleteTask extends Component {



  //render() {
    //return (
      //<div>
          //<button onClick={this.deleteItem} style={{fontSize: '40px'}}>X</button>
      //</div>
    //)
  ////}
//}

const DeleteTask = props => {
    return (
        <li>{props.name}<button onClick={props.del}>X</button></li>
    )
}

export default DeleteTask;

    