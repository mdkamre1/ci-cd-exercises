require('@testing-library/jest-dom')

const { TextEncoder, TextDecoder } = require('util')

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder

const fetch = require('node-fetch')
global.fetch = fetch