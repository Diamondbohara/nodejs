const fs = require("fs");
const path = require("path");

const src = path.join(__dirname, "..", "src");
const dist = path.join(__dirname, "..", "dist");

// Clean old build
fs.rmSync(dist, { recursive: true, force: true });

// Copy src -> dist
fs.cpSync(src, dist, { recursive: true });

console.log("Build completed: files copied to /dist");