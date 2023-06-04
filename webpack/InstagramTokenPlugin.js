const fetch = require('node-fetch');

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyHo7kexPhBzR48XNnu4u2ztKE5W3QyShCJnb2XoISJU0YCq9-RjXLEhA/exec';

async function getInstagramToken() {
  const url = new URL(GOOGLE_SCRIPT_URL);
  url.search = new URLSearchParams({
    action: 'getInstagramToken',
  });

  const response = await fetch(url);
  const responseJson = await response.json();

  return responseJson.token;
}

class InstagramTokenPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapPromise(
      'InstagramTokenPlugin',
      async (compilation) => {
        const instagramToken = await getInstagramToken();

        compilation.assets['instagramToken.txt'] = {
          source() {
            return instagramToken.reverse();
          },
          size() {
            return instagramToken.length;
          },
        };
      },
    );
  }
}

module.exports = InstagramTokenPlugin;
