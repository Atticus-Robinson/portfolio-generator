module.exports = (name, github) => {
  return `
      <!DOCTYPE html>
      <html lang='en'>
      <head>
          <meta charset='UTF-8'>
          <meta name='viewport' content='width-device-width, initial-scale=1.0'>
          <meta http-equipv='X-UA-Compatible' content='id-edge'>
          <title>Portfolio Demo</title>
      </head>
  
      <body>
          <h1>${name}</h1>
          <h2><a href='https://github.com/${github}'>Github</a></h2>
      </body>
      </html>
    `;
};
