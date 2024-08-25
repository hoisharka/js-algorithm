class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31
        for (let i = 0; i < Math.min(key,length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length
        }
        return total
    }

    mySet(key, value) {
        const hash = this._hash(key)
        if (this.keyMap[hash]) {
            this.keyMap[hash].push([key, value])
        } else {
            this.keyMap[hash] = [[key, value]]
        }
    }

    myGet(key) {
        const hash = this._hash(key)
        const data = this.keyMap[hash].find(data => data[0] === key)
        return data && data[1]
    }
}