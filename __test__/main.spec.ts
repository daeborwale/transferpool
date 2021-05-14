import { supportsWebworker } from 'main'

describe('Test main.ts', () => {
      describe('Test supportsWebworker()', () => {
            it(`should return true`, () => {
                  expect(supportsWebworker()).toBeTruthy()
            })
      })
})
