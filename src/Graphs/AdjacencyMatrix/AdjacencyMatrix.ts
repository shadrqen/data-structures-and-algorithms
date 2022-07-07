import { AdjacencyMatrix } from '~/types/Graphs'

export class Graph implements AdjacencyMatrix {
    public size: number
    public matrix: number[][]

    constructor (size: number = 1) {
      this.size = size
      this.matrix = []

      for (let i = 0; i < size; i++) {
        this.matrix.push([])
        for (let j = 0; j < size; j++) {
          this.matrix[i][j] = 0
        }
      }
    }

    /*
    * 1. Add a vertex
    * 2. Remove a vertex
    * 3. Add an edge
    * 4. Remove an edge
    * 5. Print adjacency matrix
    * */

    public addEdge (vertex1: number, vertex2: number, weight: number = 1) {
      if (vertex1 > this.size - 1 || vertex2 > this.size - 1) {
        console.log('invalid index')
      } else if (vertex1 === vertex2) {
        console.log('same vertex')
      } else {
        this.matrix[vertex1][vertex2] = weight
        this.matrix[vertex2][vertex1] = weight
      }
    }

    public removeEdge (vertex1: number, vertex2: number) {
      if (vertex1 > this.size - 1 || vertex2 > this.size - 1) {
        console.log('invalid vertex')
      } else if (vertex1 === vertex2) {
        console.log('same vertex')
      } else {
        this.matrix[vertex1][vertex2] = 0
        this.matrix[vertex2][vertex1] = 0
      }
    }

    public addVertex () {
      this.size++
      /* Push an array to the matrix.
      * If size was initially 3, then it will now be looking like
      * [[0,0,0],[0,0,0], [0,0,0], []] */
      this.matrix.push([])
      for (let i = 0; i < this.size; i++) {
        /* Push an additional 0 to each array in the matrix to look like:
        * [[0,0,0,0],[0,0,0,0], [0,0,0,0], [<3 empty items>, 0]] */
        this.matrix[i][this.size - 1] = 0
        /* Populate the last array (then one we push at the beginning of the function)
          * with zeros to look like:
          * [[0,0,0,0],[0,0,0,0], [0,0,0,0], [0,0,0,0]] */
        this.matrix[this.size - 1][i] = 0
      }
    }

    /* TODO: To confirm that this works as intended */
    public removeVertex (vertex: number) {
      if (vertex < 0 || vertex > this.size - 1) {
        console.log('invalid vertex')
      } else {
        /*  we need to shift every element in each row left by 1,
            over writing the vertex we are removing. This takes care
            of our rows! We also need to shift every element up by one,
            over writing the column which represents our vertex.
            Finally, we pop off the empty array, and decrease our size. */
        while (vertex < this.size - 1) {
          for (let i = 0; i < this.size; i++) {
            this.matrix[i][vertex] = this.matrix[i][vertex + 1]
          }
          for (let i = 0; i < this.size; i++) {
            this.matrix[vertex][i] = this.matrix[vertex + 1][i]
          }
          vertex++
        }
        this.matrix.pop()
        this.size--
      }
    }
}
