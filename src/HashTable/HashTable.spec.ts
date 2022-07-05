import { HashTable } from '~/src/HashTable/HashTable'

describe('HashTable', function () {
  it('sets and gets an existing item', () => {
    const myHashTable: HashTable = new HashTable()
    const hashKey: string = 'name'
    const hashValue: string = 'James Bond'

    myHashTable.set(hashKey, hashValue)

    expect(myHashTable.get(hashKey)).toEqual(expect.arrayContaining([[hashKey, hashValue]]))
  })
  it('returns undefined for a non-existing item', () => {
    const hashTable: HashTable = new HashTable()
    const hashKey: string = 'country'
    const hashValue: string = 'Australia'
    const unExistingHashValue: string = 'Japan'

    hashTable.set(hashKey, hashValue)

    expect(hashTable.get(unExistingHashValue)).toBeUndefined()
  })
  it('removes an item', () => {
    const hashTable: HashTable = new HashTable()
    const hashKey: string = 'skill'
    const hashValue: string = 'Cloud computing'

    hashTable.set(hashKey, hashValue)

    expect(hashTable.get(hashKey)).toEqual(expect.arrayContaining([[hashKey, hashValue]]))

    expect(hashTable.remove(hashKey)).toBe(true)
    expect(hashTable.get(hashKey)).toBeUndefined()
  })
  it('handles index collision', () => {
    const hashTable: HashTable = new HashTable()
    /* The two keys below generate an index of 126, resulting in an index collision */
    const hashKey1: string = 'Spain'
    const hashKey2: string = 'ǻ'
    const hashValue1: string = '110'
    const hashValue2: string = '192'

    hashTable.set(hashKey1, hashValue1)
    hashTable.set(hashKey2, hashValue2)

    expect(hashTable.get(hashKey1)).toEqual(expect.arrayContaining([[hashKey1, hashValue1]]))
    expect(hashTable.get(hashKey2)).toEqual(expect.arrayContaining([[hashKey2, hashValue2]]))
  })
})
