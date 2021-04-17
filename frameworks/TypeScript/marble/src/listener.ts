import { httpListener } from '@marblejs/core'
// import { logger$ } from '@marblejs/middleware-logger'
// import { bodyParser$ } from '@marblejs/middleware-body'
import { json$, plaintext$ } from './api'

const effects = [
  json$,
  plaintext$,
]

export const listener = httpListener({
  middlewares: [],
  effects,
})
