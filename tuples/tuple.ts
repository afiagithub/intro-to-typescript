let tUser: [string, number, boolean]
tUser = ['afia', 123, true]

let rgb: [number, number, number] = [255, 255, 255]

type User = [string, number]

let newUser: User = ['liz', 445]
newUser[1] = 888

// we can push, pop, shift, unshift element in newUser, which shouldn't be allowed
newUser.pop()