class newList {
    constructor(){
        this.length = 0
        this.listValue = {}
    }

    count(){
        return this.length
    }

    add(value){
        this.listValue[this.length] = value
        this.length++
        return this.listValue
    }

    remove(index){
        if (index > this.length || index < 0) {
            return console.log("Incorrect index")
        }

        for (let i=index; i < this.length; i++) {
            this.listValue[i] = this.listValue[i+1]
        }

        delete this.listValue[this.length -1]
        this.length--
        return this.listValue
    }

    search(value) {
        for(let i=0; i < this.length; i++) {
            if (this.listValue[i] === value) {
                return {'index' : i, 'value': this.listValue[i]}
            }
        }
        return 'no element was found'
        }

    modify(index, value) {
        if (index > this.length || index < 0) {
            return console.log("Incorrect index")
        }

        this.listValue[index] = value
        return this.listValue
    }


}