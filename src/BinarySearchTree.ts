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

    remove (value: number) {
      this.root = this.removeNode(this.root, value)
    }

    removeNode (node: BSTNode | null, value: number) : BSTNode | null {
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
        /* TODO: to continue from here */
      }
      return null
    }
}
