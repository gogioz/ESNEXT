student = {
    name: "Hager",
    age: "22",
    address: "Giza",
    job: "Front-End Developer",
};

student[Symbol.iterator] = function () {
    let key = Object.keys(this);
    let value = Object.values(this);
    let i = 0;
    return {
        next: () => {
            if (i < key.length) {
                let res = {
                    value: `The object with property: ${key[i]}, has value of ${value[i]}`,
                    done: false,
                };
                i++;
                return res;
            }

            return { value: undefined, done: true };
        },
    };
};

for (const property of student) {
    console.log(property);
}
