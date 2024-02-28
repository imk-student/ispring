type Student = {
    name : string;
    email: string;
    age: number;
}

type FilterTypes<Type, RequiredType> = {
    [eachKey in keyof Type as Type[eachKey] extends RequiredType ? never : eachKey]: Type[eachKey]
}

type FilteredType = FilterTypes<Student, number>