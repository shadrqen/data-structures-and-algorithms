import { HashTableInterface } from '~/types/HashTable'

export class HashTable implements HashTableInterface {
    public table: any[][]
    public size: number
    constructor () {
      this.table = new Array(127)
      this.size = 0
    }

    /* The hashing algorithm that ensures that each key has a unique index in the buckets/slots.
    * However, the function below returns the same index for 'Spain' and 'ǻ' = 126.
    * This is what we call hash table collision */
    private hash (key: string): number {
      let hash: number = 0
      let count: number = 0
      while (count < key.length) {
        hash += key.charCodeAt(count)
        count++
      }

      /* use modulus to ensure that the table size remains 127. Otherwise, the size could go unpredictably high */
      return hash % this.table.length
    }

    public set (key: string, value: any) : void {
      const index: number = this.hash(key)
      if (this.table[index]) {
        let count: number = 0
        while (count < this.table.length) {
          /* check if a similar key/value pair already exists in the table.
          * if so, push another value under the same key */
          if (Array.isArray(this.table[index][count]) && this.table[index][count][0] === key) {
            this.table[index][count][1] = value
            return
          }
          count++
        }
        /* Otherwise, push another key-value pair */
        this.table[index].push([key, value])
      } else {
        const index: number = this.hash(key)
        /* Make the value at the index to be an array so as to be pushable */
        this.table[index] = []
        this.table[index].push([key, value])
        this.size++
      }
    }

    public get (key: string) : number[] | undefined {
      const index: number = this.hash(key)
      return this.table[index]
    }

    public remove (key: string) : boolean {
      const index: number = this.hash(key)
      if (this.table[index] && this.table[index].length) {
        // @ts-ignore
        this.table[index] = undefined
        this.size--
        return true
      } else {
        return false
      }
    }
}
