import { GraphInterface } from '~/types/Graphs'

export class Graph implements GraphInterface {
  noOfVertices: number
  adjacentList: Map<any, any>
  constructor () {
    this.noOfVertices = 0
    this.adjacentList = new Map()
  }

  /*
  * functions to implement
  * addVertex(v)
  * addEdge(v, w)
  * printGraph()
  * bfs()
  * dfs()
  * */

  public addVertex (vertex: string): void {
    this.adjacentList.set(vertex, [])
    this.noOfVertices += 1
  }

  public addEdge (vertex1: string, vertex2: string): void {
    this.adjacentList.get(vertex1).push(vertex2)

    this.adjacentList.get(vertex2).push(vertex1)
  }

  public printGraph (): void {
    for (const [key, value] of this.adjacentList) {
      console.log(key, ' --> ', value.join(' --> '))
    }
  }

  public bfs (startingVertex: string) {
    const visitedNode: Map<any, any> = new Map()

    const queue = []

    visitedNode.set(startingVertex, true)

    queue.push(startingVertex)

    console.log(queue)

    while (queue.length > 0) {
      const queueElement = queue.shift()

      console.log(queueElement)

      const getList = this.adjacentList.get(queueElement)

      for (const [key, value] of getList) {
        console.log(key, value)
        queue.shift()
      }
    }
  }
}
