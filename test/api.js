import test from 'ava'
import { MockClient } from '../'
import { isFunction, isObject } from 'sav-util'

test('App#api', ava => {
  let mock = new MockClient()
  ava.true(isObject(mock))
  ava.true(isFunction(mock.register))
  ava.true(isFunction(mock.dispatch))
  ava.true(isFunction(mock.declare))
  ava.true(isFunction(mock.exists))
})
