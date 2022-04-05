export interface SinglyNode {
  data?: number
  next?: SinglyNode
}

export interface SinglyList {
  head: SinglyNode
  size: number
}
