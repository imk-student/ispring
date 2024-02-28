type Student = {
    name : string;
    email: string;
    age: number;
}

type FilterTypes<Type, DesiredType> = {
    [eachKey in keyof Type as Type[eachKey] extends DesiredType ? never : eachKey]: Type[eachKey]
}

type FilteredType = FilterTypes<Student, number>