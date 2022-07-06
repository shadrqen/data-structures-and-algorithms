export interface BSTNode {
    value: number
    left: BSTNode | null
    right: BSTNode | null
}

export type BSTNodeUnion = BSTNode | null

export interface BSTInterface {
    root: BSTNodeUnion
    inOrderTraversedValues: number[]
    preOrderTraversedValues: number[]
    postOrderTraversedValues: number[]
    insert (value: number): void
    insertWNE (node: BSTNode, value: number): void
    search (node: BSTNodeUnion, value: number) : boolean
    remove (value: number, sucessorOrPredecessor: string | null): BSTNodeUnion
    inorderTraversal (node: BSTNodeUnion): void
    preorderTraversal (node: BSTNodeUnion): void
    postorderTraversal (node: BSTNodeUnion): void
    bfs(node: BSTNodeUnion, callback: Function): void
}
