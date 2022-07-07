export interface GraphInterface {
    noOfVertices: number
    adjacentList: Map<any, any>
    addVertex(vertex: string): void
    addEdge(vertex1: string, vertex2: string, directed?: boolean): void
    printGraph(): void
    bfs(startingVertex: string): void
}
