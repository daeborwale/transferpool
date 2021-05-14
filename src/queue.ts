export default class Queue<T> {
      store: T[] = []

      push(val: T | T[]): void {
            const args = Array.isArray(val) ? val : [val]

            this.store.push(...args)
      }

      pop(): T | undefined {
            return this.store.shift()
      }

      get length(): number {
            return this.store.length
      }
}
