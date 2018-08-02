function renderScript(filePath) {
  return `<script type="text/javascript" src="${filePath}"></script>`;
}

function renderCSS(filePath) {
  return ` <link rel="stylesheet" type="text/css" href="${filePath}">`;
}

function renderHeadJS() {
  return renderScript('build/main.bundle.js');
}

function renderHeadCSS() {
  return renderCSS('build/main.css');
}

export function render() {
  return (`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="theme-color" content="#000000">
        ${renderHeadCSS()}
        <title>React App</title>
      </head>
      <body>
        <div id="root"></div>
        ${renderHeadJS()}
      </body>
    </html>
  `)
}
