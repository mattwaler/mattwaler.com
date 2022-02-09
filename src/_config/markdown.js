const md = require('markdown-it')
const mdContainer = require('markdown-it-container')

const markdown = md()
  .use(mdContainer, 'codeblock', {
    render: function (tokens, idx) {
      if (tokens[idx].type === 'container_codeblock_open') {
        return `
          <div class="bg-gray-900 p-4 text-white rounded-lg shadow-lg">
            <div class="space-x-2 flex items-center">
              <div class="rounded-full w-3 h-3 bg-red-500"></div>
              <div class="rounded-full w-3 h-3 bg-yellow-500"></div>
              <div class="rounded-full w-3 h-3 bg-green-500"></div>
            </div>
        `
      } return `</div>`
    }
  })

module.exports = markdown
