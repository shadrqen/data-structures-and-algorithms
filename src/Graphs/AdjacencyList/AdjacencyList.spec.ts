import { Graph } from '~/src/Graphs/AdjacencyList/AdjacencyList'

describe('Graph using Adjacency List', function () {
  it('should add vertices', () => {
    const graph = new Graph()

    // add vertexes
    graph.addVertex('A')
    graph.addVertex('B')
    graph.addVertex('C')

    expect(graph.adjacentList.has('A')).toBe(true)
    expect(graph.adjacentList.has('B')).toBe(true)
    expect(graph.adjacentList.has('C')).toBe(true)
  })
  it('should add edge', () => {
    const graph = new Graph()

    // add vertexes
    graph.addVertex('A')
    graph.addVertex('B')
    graph.addVertex('C')

    // add edges
    graph.addEdge('A', 'B')
    graph.addEdge('B', 'C')

    /* TODO: To implement the test below
    * expect(graph.adjacentList.values()).toContain('A') */
  })
  it('should search using bfs', () => {
    const graph = new Graph()

    // add vertexes
    graph.addVertex('A')
    graph.addVertex('B')
    graph.addVertex('C')
    graph.addVertex('D')
    graph.addVertex('E')
    graph.addVertex('F')
    graph.addVertex('G')
    graph.addVertex('H')

    // add edges
    graph.addEdge('A', 'B')
    graph.addEdge('A', 'D')
    graph.addEdge('A', 'E')
    graph.addEdge('B', 'C')
    graph.addEdge('C', 'D')
    graph.addEdge('C', 'F')
    graph.addEdge('C', 'G')
    graph.addEdge('D', 'E')
    graph.addEdge('E', 'F')
    graph.addEdge('F', 'G')
    graph.addEdge('G', 'H')

    graph.bfs('A')
  })
  it('should search using dfs', () => {})
})
