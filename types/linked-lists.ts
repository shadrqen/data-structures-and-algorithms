
export interface SinglyNode {
  data?: number
  next?: SinglyNode | null
}

export type SinglyNodeUnion = SinglyNode | null

export interface SinglyList {
  head: SinglyNodeUnion
  size: number
}

export type DataAtPosition = number | null
