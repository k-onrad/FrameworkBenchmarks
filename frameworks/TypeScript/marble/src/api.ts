import { r } from '@marblejs/core'
import { mapTo } from 'rxjs/operators'

export const json$ = r.pipe(
  r.matchPath('/json'),
  r.matchType('GET'),
  r.useEffect(req$ => req$.pipe(
    mapTo({
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Server: 'marble',
      },
      body: { message: 'Hello, World!' },
    }),
  )))

export const plaintext$ = r.pipe(
  r.matchPath('/plaintext'),
  r.matchType('GET'),
  r.useEffect(req$ => req$.pipe(
    mapTo({
      headers: {
        'Content-Type': 'text/plain; charset=UTF-8',
        Server: 'marble',
      },
      body: 'Hello, World!',
    }),
  )))

// export const db$ = r.pipe(
//   r.matchPath('/db'),
//   r.matchType('GET'),
//   r.useEffect(req$ => req$.pipe(
//     mapTo({ body: 'Hello, world!' }),
//   )))
//
// export const queries$ = r.pipe(
//   r.matchPath('/queries'),
//   r.matchType('GET'),
//   r.useEffect(req$ => req$.pipe(
//     mapTo({ body: 'Hello, world!' }),
//   )))
//
// export const fortunes$ = r.pipe(
//   r.matchPath('/fortunes'),
//   r.matchType('GET'),
//   r.useEffect(req$ => req$.pipe(
//     mapTo({ body: 'Hello, world!' }),
//   )))
//
// export const updates$ = r.pipe(
//   r.matchPath('/updates'),
//   r.matchType('GET'),
//   r.useEffect(req$ => req$.pipe(
//     mapTo({ body: 'Hello, world!' }),
//   )))
