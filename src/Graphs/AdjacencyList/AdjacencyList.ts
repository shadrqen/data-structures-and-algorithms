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

  public addEdge (vertex1: string, vertex2: string, directed: boolean = true): void {
    this.adjacentList.get(vertex1).push(vertex2)

    if (!directed) {
      this.adjacentList.get(vertex2).push(vertex1)
    }
  }

  public printGraph (): void {
    for (const [key, value] of this.adjacentList) {
      console.log(key, ' --> ', value.join(' --> '))
    }
  }

  public bfs (startingVertex: string) {
    if (this.adjacentList.has(startingVertex)) {
      /* Create a set of visited nodes to keep track of the ones we've
      * already visited */
      const visitedNode: Set<string> = new Set()

      /* A queue to traverse in a breadth-first/FIFO manner */
      const queue: string[] = []

      visitedNode.add(startingVertex)

      /* Start with the starting vertex */
      queue.push(startingVertex)

      /* Loop until the queue is empty (no more connected nodes) */
      while (queue.length > 0) {
        /* Shift (remove) the first element into the queue
        * and use it as the current node. Will the startingVertex at the
        * beginning */
        const currentNode: string = queue.shift() as string

        console.log(currentNode)

        /* Get the neighbours */
        const neighbours: string[] = this.adjacentList.get(currentNode)

        /* Get the neighbours sequentially (as they follow one another) */
        for (const neighbour of neighbours) {
          /* If a neighbour is yet to be visited, visit him/her */
          if (!visitedNode.has(neighbour)) {
            /* Push the neighbour into the queue so that he/she
            * will be processed */
            queue.push(neighbour)
            visitedNode.add(neighbour)
          }
        }
      }
    }
  }
}
