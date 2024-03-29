# event-aggregator

This is very simple event aggregator

## Installation

`npm install --save @locmod/event-aggregator`

## Usage

Can be used directly
```ts
import { events } from '@locmod/event-aggregator'
```

or can be used as a class

```ts
const events = new EventAggregator()
```

### Subscribe to event
```ts
useEffect(() => {
  const unsubscribe = events.subscribe('test event', console.log)

  return () => {
    unsubscribe()
  }
}, [])
```
or just
```ts
events.subscribe('test event', console.log)
```

### Dispatch an event
```ts
events.subscribe('test event', { value: 10 }) // console.log will be called with { value: 10 }
```


### Unsubscribe
```ts
events.unsubscribe('test event', console.log)
```

### Get event
Get Event by name
```ts
events.getEvent('test event')
events.getEvent('unexistant event') // if event not found, it will be created and returned
```

### Once
Subscribe to Event and unsubscribe after call
```ts
events.once('once in a lifetime', console.log)
```
