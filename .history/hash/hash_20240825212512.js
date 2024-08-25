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

    set(key, value) {
        let index = this._hash(key)
        if(!this.keyMap[index]) {
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key, value])
    }

    get() {
        let index = this._hash(key)
        if(!this.keyMap[index]) {
            for(let i=0; i<this.keyMap[index].length; i++) {
                if(this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i]
                }
            }
        }
        return undefined
    }

    keys() {
        let valuesArr = []
        for(let i=0; i<this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j=0; j<this.keyMap[i].length; j++) {
                    if(!valuesArr.includes(this.keyMap[i][j][0])) {
                        valuesArr.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
    }

    values() {
        let valuesArr = []
        for(let i=0; i<this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j=0; j<this.keyMap[i].length; j++) {
                    if(!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
    }
}