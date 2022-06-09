export interface SinglyNode {
  data?: number
  next?: SinglyNode | null
}

export interface DoublyNode {
  value: number | null
  previous?: DoublyNode | null
  next?: DoublyNode | null
}

export type DoublyNodeUnion = DoublyNode | null

export type SinglyNodeUnion = SinglyNode | null

export interface SinglyList {
  head: SinglyNodeUnion
  size: number
}

export interface DoublyList {
  head: DoublyNodeUnion
  tail: DoublyNodeUnion
  size: number
}

export type DataAtPosition = number | null
