import { describe, test, expect } from 'vitest'
import worker from './index.js'

const env = { ASSETS: { fetch: async () => new Response('<html></html>', { headers: { 'Content-Type': 'text/html' } }) } }
const get = (accept) => worker.fetch(new Request('https://example.com/', { headers: accept ? { Accept: accept } : {} }), env)

describe('home page content negotiation', () => {
  test('returns markdown when asked for it', async () => {
    const res = await get('text/markdown, text/html;q=0.5')
    expect(res.headers.get('Content-Type')).toContain('text/markdown')
    expect(res.headers.get('Vary')).toBe('Accept')
    expect(await res.text()).toContain('# Welcome to the Southern Utah Vue.js Meetup')
  })
  test('passes browsers through to the static assets', async () => {
    const res = await get('text/html,application/xhtml+xml')
    expect(res.headers.get('Content-Type')).toBe('text/html')
    expect(res.headers.get('Vary')).toBe('Accept')
    expect(await res.text()).toBe('<html></html>')
  })
  test('passes requests without an Accept header through', async () => {
    expect((await get()).headers.get('Content-Type')).toBe('text/html')
  })
})
