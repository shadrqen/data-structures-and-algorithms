import { BSTNode } from '~/types/Trees'

export class Node implements BSTNode {
    value: number
    left: BSTNode | null
    right: BSTNode | null

    constructor (value: number, left: BSTNode | null = null, right: BSTNode | null = null) {
      this.value = value
      this.left = left
      this.right = right
    }
}

export class BinarySearchTree {
    root: BSTNode | null
    constructor () {
      this.root = null
    }

    insert (value: number) {
      const newNode = new Node(value)

      if (this.root) {
        this.insertWhenNotEmpty(this.root, newNode)
      } else {
        this.root = newNode
      }
    }

    insertWhenNotEmpty (node: BSTNode, newNode: BSTNode): void {
      if (newNode.value < node.value) {
        if (node.left) {
          this.insertWhenNotEmpty(node.left, newNode)
        } else {
          node.left = newNode
        }
      } else {
        if (node.right) {
          this.insertWhenNotEmpty(node.right, newNode)
        } else {
          node.right = newNode
        }
      }
    }

    search (node: BSTNode | null, value: number): boolean {
      if (!node) {
        return false
      }
      if (node.value === value) {
        return true
      }
      if (value < node.value) {
        return this.search(node.left, value)
      } else {
        return this.search(node.right, value)
      }
    }

    remove (value: number, removalType: string = 'successor') {
      this.root = this.removeNode(this.root, value, removalType)
    }

    removeNode (node: BSTNode | null, value: number, removalType: string = 'successor') : BSTNode | null {
      if (!node) {
        return null
      } else if (value < node.value) {
        node.left = this.removeNode(node.left, value)
        return node
      } else if (value > node.value) {
        node.right = this.removeNode(node.right, value)
        return node
      } else {
        // deleting node with no child
        if (!node.left && !node.right) {
          node = null
          return node
        }

        // deleting node with one child
        if (!node.left) {
          node = node.right
          return node
        }
        if (!node.right) {
          node = node.left
          return node
        }

        // deleting node with two children
        return this.inorderPredeSuccessor(removalType, node)
      }
    }

    // inserts either in in-order successor or predecessor
    inorderPredeSuccessor (removalType: string, node: BSTNode) : BSTNode {
      if (removalType === 'successor') {
        const minRightNode = this.findMinRightNode(node.right as BSTNode)
        // replace the value of the current (to be replaced) with the minimum value in the right sub-tree
        node.value = minRightNode.value
        // then remove the minimum right node
        node.right = this.removeNode(node.right, minRightNode.value)
      } else {
        const maxLeftNode = this.findMaxLeftNode(node.left as BSTNode)
        // replace the value of the current (to be replaced) with the maximum value in the left sub-tree
        node.value = maxLeftNode.value
        // then remove the maximum left node
        node.left = this.removeNode(node.left, maxLeftNode.value)
      }
      return node
    }

    // find the minimum node on the right sub-tree
    findMinRightNode (node: BSTNode): BSTNode {
      if (!node.left) {
        return node
      }
      return this.findMinRightNode(node.left)
    }

    // find the maximum node on the left sub-tree
    findMaxLeftNode (node: BSTNode): BSTNode {
      if (!node.right) {
        return node
      }
      return this.findMaxLeftNode(node.right)
    }
}
