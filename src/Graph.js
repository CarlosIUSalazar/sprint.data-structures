class Graph {
  constructor() {
    this.nodes = {}; //adjacency list
  }

  addNode(node) {
    //IF there's nothing there already then make it an empty array
    if (!this.nodes[node]) {
      this.nodes[node] = [];
    }
    return undefined;
  }

  addEdge(value1, value2) {
    if (!this.contains(value1) || !this.contains(value2)) {
      return "Invalid node value";
    } else if (!this.nodes[value1.toString()].includes(value2)) {
      this.nodes[value1.toString()].push(value2);
      this.nodes[value2.toString()].push(value1);
    }
  }

  removeEdge(node1, node2) {
    this.nodes[node1] = this.nodes[node1].filter((v) => v !== node2); //Take the current list of Adjacent 1 and remove vertex2;
    this.nodes[node2] = this.nodes[node2].filter((v) => v !== node2); //Take the current list of Adjacent 2 and remove vertex1;
  }

  removeNode(node) {
    delete this.nodes[node];
    for (const key in this.nodes) {
      let arrayOfLinks = this.nodes[key];
      if (arrayOfLinks.includes(node)) {
        arrayOfLinks.splice(arrayOfLinks.indexOf(node), 1);
      }
    }
  }

  contains(value) {
    if (value in this.nodes) {
      return true;
    }
    return false;
  }

  hasEdge(value1, value2) {
    let index1 = this.nodes[value2].indexOf(value1);
    let index2 = this.nodes[value1].indexOf(value2);
    if (index1 !== -1 && index2 !== -1) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Graph;

/**
 * There are many representations of Graph.
 * We can store Graph in many ways.
 * One way is by using Adjacency List.
 */

//     this.nodes = {}; // Adjacency List
//   }
// }

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/

// class Graph{
//   constructor(){
//     this.nodes = {};
//   }

//   addVertex(vertex){
//     if(!this.nodes[vertex]) this.nodes[vertex] = [];
//   }

//   addEdge(v1, v2){
//     this.nodes[v1].push(v2);
//     this.nodes[v2].push(v1);
//   }

//   removeEdge(vertex1,vertex2){
//     this.nodes[vertex1] = this.nodes[vertex1].filter(v => v !== vertex2); //Take the current list of Adjacent 1 and remove vertex2;

//     this.nodes[vertex2] = this.nodes[vertex2].filter(v => v !== vertex1); //Take the current list of Adjacent 2 and remove vertex1;
//   }

//     removeVertex(vertex){
//     while (this.nodes[vertex].length){ //While there are elements in this array
//       const adjacenctVertex = this.nodes[vertex].pop();
//       this.removeEdge(vertex,adjacenctVertex); //it could be adjacentVertex, vertex becuase it's an undirected graph
//     }
//       delete this.nodes[vertex]; //Deletes the remaining empty array that is now disconnected
//   }
// }
// let g = new Graph();
// g.addNode("Tokyo")
// g.addNode("Dallas")
// g.addNode("Aspen")
// g.addNode("Los Angeles")
// g.addNode("Hong Kong")
// g.addEdge("Dallas","Tokyo")
// g.addEdge("Dallas","Aspen")
// g.addEdge("Hong Kong","Dallas")
// g.addEdge("Hong Kong","Tokyo")
// g.addEdge("Los Angeles","Hong Kong")
// g.addEdge("Los Angeles","Aspen")
// //g.removeEdge("Dallas","Aspen")
// g.removeNode("Hong Kong")
// g.removeNode("Aspen")
// console.log(g)
