import { Graph } from '~/src/Graphs/AdjacencyList/AdjacencyList'

describe('Graph using Adjacency List', function () {
  const createGraph = (vertexes: string[], edges: string[][] = []): Graph => {
    const graph = new Graph()

    vertexes.forEach(vertex => {
      graph.addVertex(vertex)
    })

    if (edges.length > 0) {
      edges.forEach(edge => {
        graph.addEdge(edge[0], edge[1])
      })
    }
    return graph
  }

  it('should add vertices', () => {
    const vertexes: string[] = ['A', 'B', 'C']
    const graph: Graph = createGraph(vertexes)

    expect(graph.adjacentList.has(vertexes[0])).toBe(true)
    expect(graph.adjacentList.has(vertexes[1])).toBe(true)
    expect(graph.adjacentList.has(vertexes[2])).toBe(true)
  })
  it('should add edge', () => {
    const vertexes: string[] = ['A', 'B', 'C']
    const edges: string[][] = [['A', 'B'], ['B', 'C']]

    const graph: Graph = createGraph(vertexes, edges)

    /* TODO: To implement the test to check fo */
    expect(graph.adjacentList.keys()).toBeTruthy()
  })
  it('should search using bfs', () => {
    const vertexes: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

    const edges: string[][] = [['A', 'B'], ['A', 'D'], ['A', 'E'], ['B', 'C'], ['C', 'D'],
      ['C', 'F'], ['C', 'G'], ['D', 'E'], ['E', 'F'], ['F', 'G'], ['G', 'H']]

    const graph: Graph = createGraph(vertexes, edges)

    // graph.bfs('A')

    /* TODO: To implement appropriate test */
    expect(graph.adjacentList).toBeTruthy()
  })
  it('should respond to starting node not found using bfs', () => {
    const vertexes: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

    const edges: string[][] = [['A', 'B'], ['A', 'D'], ['A', 'E'], ['B', 'C'], ['C', 'D'],
      ['C', 'F'], ['C', 'G'], ['D', 'E'], ['E', 'F'], ['F', 'G']]

    const graph: Graph = createGraph(vertexes, edges)
    const missingVertex: string = 'K'

    graph.bfs(missingVertex)

    /* TODO: To implement appropriate test */
    expect(graph.adjacentList).toBeTruthy()
  })
  it('should search using dfs', () => {})
})
