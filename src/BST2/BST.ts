import { BSTInterface, BSTNodeUnion } from '~/types/Trees'

class BSTNode {
    public left: BSTNodeUnion
    public right: BSTNodeUnion
    public value: number

    constructor (value: number, left: BSTNodeUnion = null, right: BSTNodeUnion = null) {
      this.left = left
      this.right = right
      this.value = value
    }
}

export class BST implements BSTInterface {
    public root: BSTNodeUnion
    public inOrderTraversedValues: number[]
    public preOrderTraversedValues: number[]
    public postOrderTraversedValues: number[]

    constructor () {
      this.root = null
      this.inOrderTraversedValues = []
      this.preOrderTraversedValues = []
      this.postOrderTraversedValues = []
    }

    public insert (value: number): void {
      if (this.root) {
        this.insertWNE(this.root, value)
      } else {
        this.root = new BSTNode(value)
      }
    }

    public insertWNE (node: BSTNode, value: number): void {
      if (value < node.value) {
        if (node.left) {
          this.insertWNE(node.left, value)
        } else {
          node.left = new BSTNode(value)
        }
      } else {
        if (node.right) {
          this.insertWNE(node.right, value)
        } else {
          node.right = new BSTNode(value)
        }
      }
    }

    public search (node: BSTNodeUnion, value: number) : boolean {
      if (!node) {
        return false
      }
      if (node.value === value) {
        return true
      } else if (value < node.value) {
        return this.search(node.left, value)
      } else {
        return this.search(node.right, value)
      }
    }

    public remove (value: number, sucessorOrPredecessor: string | null = null): BSTNodeUnion {
      return this.removeNode(this.root as BSTNode, value, sucessorOrPredecessor)
    }

    private removeNode (node: BSTNodeUnion, value: number, sucessorOrPredecessor: string | null): BSTNodeUnion {
      const nodeExists: boolean = this.search(this.root, value)
      if (nodeExists) {
        if (!node) {
          return null
        }
        if (value < node.value) {
          node.left = this.removeNode(node.left as BSTNode, value, sucessorOrPredecessor)
          return node
        } else if (value > node.value) {
          node.right = this.removeNode(node.right as BSTNode, value, sucessorOrPredecessor)
          return node
        } else {
          if (!node.left && !node.right) {
            node = null
            return node
          }
          if (!node.left) {
            node = node.right
            return node
          } else if (!node.right) {
            node = node.left
            return node
          }
          return this.successorPredecessor(node, sucessorOrPredecessor)
        }
      } else {
        return null
      }
    }

    private successorPredecessor (node: BSTNode, removalType: string | null = 'predecessor'): BSTNodeUnion {
      if (removalType === 'predecessor') {
        const maxLeftNode = this.findMaxLeftNode(node.left as BSTNode)

        node.value = maxLeftNode.value

        node.left = this.removeNode(node.left, maxLeftNode.value, removalType)

        return node
      } else {
        const minRightNode: BSTNode = this.findMinRightNode(node.right as BSTNode)

        node.value = minRightNode.value

        node.right = this.removeNode(node.right, minRightNode.value, removalType)
        return node
      }
    }

    private findMaxLeftNode (node: BSTNode): BSTNode {
      if (!node.right) {
        return node
      } else {
        return this.findMaxLeftNode(node.right)
      }
    }

    private findMinRightNode (node: BSTNode): BSTNode {
      if (!node.left) {
        return node
      } else {
        return this.findMinRightNode(node.left)
      }
    }

    /* Start with left node, then root and finally right node */
    public inorderTraversal (node: BSTNodeUnion): void {
      if (node) {
        this.inorderTraversal(node.left)
        this.inOrderTraversedValues.push(node.value)
        this.inorderTraversal(node.right)
      }
    }

    /* Start with root, then left node and finally right node */
    public preorderTraversal (node: BSTNodeUnion): void {
      if (node) {
        this.preOrderTraversedValues.push(node.value)
        this.preorderTraversal(node.left)
        this.preorderTraversal(node.right)
      }
    }

    /* Start with left node, then right node and finally root */
    public postorderTraversal (node: BSTNodeUnion): void {
      if (node) {
        this.postorderTraversal(node.left)
        this.postorderTraversal(node.right)
        this.postOrderTraversedValues.push(node.value)
      }
    }

    /* A breadth-first search approach to traversing the tree */
    public bfs (node: BSTNodeUnion, calllback: Function): void {
      /*
      * 1. Initialize queue
      * 2. Push current node (root) to the queue
      * 3. While length of queue > 0
      *     i. shift queue (fast in) and store shifted item
      *     ii. print item value
      *     iii. if (item.left and item.right are null) continue
      *     iv. push item.left && item.right to queue
      *     v. repeat from i.
      * */
      if (node) {
        const queue: BSTNode[] = [node]

        while (queue.length > 0) {
          /* Remove the first added node from the queue and store as current item */
          const item: BSTNode = queue.shift() as BSTNode

          calllback(item.value)

          /* Terminates execution of the remaining statements
          * in the current iteration and continues with the next
          * iteration in the while loop */
          if (!item.left && !item.right) {
            continue
          }

          /* Push the left node to the queue */
          if (item.left) {
            queue.push(item.left)
          }

          /* Push the right node to the queue */
          if (item.right) {
            queue.push(item.right)
          }
        }
      }
    }
}
