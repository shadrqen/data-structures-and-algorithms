import { Graph } from '~/src/Graphs/AdjacencyMatrix/AdjacencyMatrix'

describe('AdjacencyMatrix', function () {
  const createEdge = (vertices: number[][], size: number, weight: number = 1): Graph => {
    const graph = new Graph(size)

    vertices.forEach(verticePair => {
      graph.addEdge(verticePair[0], verticePair[1], weight)
    })

    return graph
  }
  it('adds an edge', () => {
    const vertices: number[][] = [[0, 1]]
    const graph = createEdge(vertices, 3)

    expect(graph.matrix[vertices[0][0]][vertices[0][1]]).toBe(1)
  })
  it('removes a vertex/node', () => {
    const vertices: number[][] = [[0, 1], [0, 2]]
    const graph: Graph = createEdge(vertices, 3)

    expect(graph.matrix[vertices[0][0]][vertices[0][1]]).toBe(1)
    expect(graph.matrix[vertices[1][0]][vertices[1][1]]).toBe(1)

    graph.removeEdge(vertices[0][0], vertices[0][1])

    expect(graph.matrix[vertices[0][0]][vertices[0][1]]).toBe(0)
    expect(graph.matrix[vertices[1][0]][vertices[1][1]]).toBe(1)
  })
  it('adds a vertex', () => {
    const vertices: number[][] = [[0, 1], [0, 2]]
    const graph = createEdge(vertices, 3)

    expect(graph.matrix[vertices[0][0]][vertices[0][1]]).toBe(1)

    graph.addVertex()

    expect(graph.matrix[vertices[0][0]][vertices[0][1]]).toBe(1)
  })
  it('removes a vertex', () => {
    const vertices: number[][] = [[0, 1], [0, 2], [0, 3]]
    const graph = createEdge(vertices, 4)

    expect(graph.matrix[vertices[0][0]][vertices[0][1]]).toBe(1)
    expect(graph.matrix[vertices[1][0]][vertices[1][1]]).toBe(1)
    expect(graph.matrix[vertices[2][0]][vertices[2][1]]).toBe(1)

    graph.removeVertex(1)
  })
})
