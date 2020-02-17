js_file = open("worker.js", "w")
html_file = open("notebook.html", "r")
html_template = html_file.read().replace('\\', '\\\\').replace('`', '\\`')

js_template = """
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  var body = `%s`
  return new Response(body, {
    headers: { 'content-type': 'text/html' },
  })
}
""" % (html_template)

n = js_file.write(js_template)
js_file.close()
