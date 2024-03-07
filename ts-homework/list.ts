class NewList <T>{
    length: number;
    listValue: { [key: number]: T };

    constructor() {
        this.length = 0;
        this.listValue = {};
    }

    count(): number {
        return this.length;
    }

    add(value: T): { [key: number]: T } {    
        this.listValue[this.length] = value;
        this.length++;
        return this.listValue;
    }

    remove(index: number): { [key: number]: T } {
        if (index > this.length || index < 0) {
            console.log("Incorrect index");
            return {}
        }

        for (let i = index; i < this.length; i++) {
            this.listValue[i] = this.listValue[i + 1];
        }

        delete this.listValue[this.length - 1];
        this.length--;
        return this.listValue;
    }

    search(value: T): { index: number, value: T } | string {
        for (let i = 0; i < this.length; i++) {
            if (this.listValue[i] === value) {
                return { 'index': i, 'value': this.listValue[i] };
            }
        }
        return 'no element was found';
    }

    modify(index: number, value: T): { [key: number]: T } {
        if (index > this.length || index < 0) {
            console.log("Incorrect index");
            return {}
        }

        this.listValue[index] = value;
        return this.listValue;
    }
}

let myList = new NewList()
myList.add(4)
myList.add(8)
myList.add(-6)
myList.add(100)
myList.add(12)
console.log(myList)
myList.modify(3,0)
console.log(myList)
console.log(myList.search(0))
myList.remove(3)
console.log(myList)
let myListString = new NewList<string>()
myListString.add('4')
myListString.add('sasa')
myListString.add('zaza')
myListString.add('100')
myListString.add('12')
console.log(myListString)
myListString.modify(3,'0')
console.log(myListString)
console.log(myListString.search('0'))
myListString.remove(3)
console.log(myListString)