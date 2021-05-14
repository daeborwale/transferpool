import Queue from 'queue'

describe('Test Queue', () => {
      describe('Test push()', () => {
            it(`should return [1]`, () => {
                  const queue = new Queue()
                  queue.push(1)

                  expect(queue.store).toEqual([1])
            })
      })

      describe('Test push() multiple entires', () => {
            it(`should return [1, 2, 3]`, () => {
                  const queue = new Queue()
                  queue.push([1, 2, 3])

                  expect(queue.store).toEqual([1, 2, 3])
            })
      })

      describe('Test pop()', () => {
            it(`should return []`, () => {
                  const queue = new Queue()
                  queue.push(1)
                  queue.pop()

                  expect(queue.store).toEqual([])
            })
      })

      describe('Test Queue.length', () => {
            it(`should return 1`, () => {
                  const queue = new Queue()
                  queue.push(1)

                  expect(queue.length).toBe(1)
            })
      })
})
