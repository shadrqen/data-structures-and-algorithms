export interface GraphInterface {
    noOfVertices: number
    adjacentList: Map<any, any>
    addVertex(vertex: string): void
    addEdge(vertex1: string, vertex2: string, directed?: boolean): void
    printGraph(): void
    bfs(startingVertex: string): void
}

export interface AdjacencyMatrix {
    size: number
    matrix: number[][]
    addEdge(vertex1: number, vertex2: number, weight: number): void
    removeEdge(vertex1: number, vertex2: number): void
    addVertex(): void
    removeVertex(vertex: number): void
}
