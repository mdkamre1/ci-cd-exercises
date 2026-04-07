import { TextEncoder, TextDecoder } from 'util'
import fetch, { Headers, Request, Response } from 'node-fetch'

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder

//  FIX fetch for Jest
global.fetch = fetch
global.Headers = Headers
global.Request = Request
global.Response = Response