/* const fs = require("fs");
const path = require("path");

const src = path.join(__dirname, "..", "src");
const dist = path.join(__dirname, "..", "dist");

// Clean old build
fs.rmSync(dist, { recursive: true, force: true });

// Copy src -> dist
fs.cpSync(src, dist, { recursive: true });

console.log("Build completed: files copied to /dist");
 */

const fs = require("fs");
const path = require("path");

const src = path.join(__dirname, "..", "src");
const dist = path.join(__dirname, "..", "dist");

// Clean old build
fs.rmSync(dist, { recursive: true, force: true });

// Copy src -> dist
fs.cpSync(src, dist, { recursive: true });

// Add a simple web page so GitHub Pages has something to show
const html = `<!DOCTYPE html>
<html>
  <head><title>GitHub Actions Demo</title></head>
  <body>
    <h1>GitHub Actions Demo</h1>
    <p>Deployed automatically by GitHub Actions.</p>
    <p>Build time: ${new Date().toISOString()}</p>
  </body>
</html>`;
fs.writeFileSync(path.join(dist, "index.html"), html);

console.log("Build completed: files copied to /dist");