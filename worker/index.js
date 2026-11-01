// Serves a Markdown version of the home page to agents that ask for it (Accept: text/markdown).
// Everything else falls through to the static assets. Keep the text in sync with src/views/index.vue.
const HOME_MARKDOWN = `# Welcome to the Southern Utah Vue.js Meetup

Vue.js is a progressive JavaScript framework.

This group is to get Vue developers together to talk about a variety of topics from the most basic to the more advanced.

All skill levels are welcome, if you're interested in Vue we would love to have you join us!

This group will be doing its events online until further notice.

## Website coming soon!
`

function wantsMarkdown(request) {
  const accept = request.headers.get('Accept') || ''
  return accept.split(',').some((part) => part.trim().toLowerCase().startsWith('text/markdown'))
}

export default {
  async fetch(request, env) {
    if (wantsMarkdown(request)) {
      return new Response(request.method === 'HEAD' ? null : HOME_MARKDOWN, {
        headers: { 'Content-Type': 'text/markdown; charset=utf-8', Vary: 'Accept' }
      })
    }

    const response = await env.ASSETS.fetch(request)
    const varied = new Response(response.body, response)
    varied.headers.append('Vary', 'Accept')
    return varied
  }
}
