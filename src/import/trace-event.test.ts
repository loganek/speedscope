import {checkProfileSnapshot} from '../lib/test-utils'

test('importTraceEvents simple', async () => {
  await checkProfileSnapshot('./sample/profiles/trace-event/simple.json')
})

test('importTraceEvents simple object', async () => {
  await checkProfileSnapshot('./sample/profiles/trace-event/simple-object.json')
})

test('importTraceEvents multiprocess', async () => {
  await checkProfileSnapshot('./sample/profiles/trace-event/multiprocess.json')
})

test('importTraceEvents simple partial', async () => {
  await checkProfileSnapshot('./sample/profiles/trace-event/simple-partial.json')
})

test('importTraceEvents simple object partial', async () => {
  await checkProfileSnapshot('./sample/profiles/trace-event/simple-object-partial.json')
})
