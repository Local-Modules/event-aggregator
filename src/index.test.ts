import { events } from './index'

it('check events', () => {
  events.subscribe('test', () => console.log)

  expect(events.getEvent('test').name).toBe('test')
})
