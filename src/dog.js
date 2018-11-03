// @flow

class Dog {
  name: string

  constructor(name: string) {
    this.name = name
  }

  bark() {
    return `Wa wah, I am ${this.name}`
  }
}

export default Dog
