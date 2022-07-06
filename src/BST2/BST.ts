class BSTNode {
    public left: BSTNode | null
    public right: BSTNode | null
    public value: number

    constructor (value: number, left: BSTNode | null = null, right: BSTNode | null = null) {
      this.left = left
      this.right = right
      this.value = value
    }
}

export class BST {
    public root: BSTNode | null
    public inOrderTraversedValues: number[]
    public preOrderTraversedValues: number[]
    public postOrderTraversedValues: number[]

    constructor () {
      this.root = null
      this.inOrderTraversedValues = []
      this.preOrderTraversedValues = []
      this.postOrderTraversedValues = []
    }

    public insert (value: number) {
      if (this.root) {
        this.insertWNE(this.root, value)
      } else {
        this.root = new BSTNode(value)
      }
    }

    public insertWNE (node: BSTNode, value: number) {
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

    public search (node: BSTNode | null, value: number) : boolean {
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

    public remove (value: number, sucessorPredecessor: string | null = null) {
      return this.removeNode(this.root as BSTNode, value, sucessorPredecessor)
    }

    private removeNode (node: BSTNode | null, value: number, sucessorOrPredecessor: string | null): BSTNode | null {
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

    private successorPredecessor (node: BSTNode, choice: string | null = null): BSTNode | null {
      if (!choice) {
        const maxLeftNode = this.findMaxLeftNode(node.left as BSTNode)

        node.value = maxLeftNode.value

        node.left = this.removeNode(node.left, maxLeftNode.value, choice)

        return node
      } else {
        const minRightNode: BSTNode = this.findMinRightNode(node.right as BSTNode)

        node.value = minRightNode.value

        node.right = this.removeNode(node.right, minRightNode.value, choice)
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
    public inorderTraversal (node: BSTNode | null) {
      if (node) {
        this.inorderTraversal(node.left)
        // console.log(node.value)
        this.inOrderTraversedValues.push(node.value)
        this.inorderTraversal(node.right)
      }
    }

    /* Start with root, then left node and finally right node */
    public preorderTraversal (node: BSTNode | null) {
      if (node) {
        this.preOrderTraversedValues.push(node.value)
        this.preorderTraversal(node.left)
        this.preorderTraversal(node.right)
      }
    }

    /* Start with left node, then right node and finally root */
    public postorderTraversal (node: BSTNode | null) {
      if (node) {
        this.postorderTraversal(node.left)
        this.postorderTraversal(node.right)
        this.postOrderTraversedValues.push(node.value)
      }
    }
}
