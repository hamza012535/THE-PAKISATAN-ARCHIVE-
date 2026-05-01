const fs = require('fs');
const content = fs.readFileSync('src/lib/content.ts', 'utf-8');
const slugs = content.match(/slug:\s*["']([^"']+)["']/g);
if (slugs) {
  const target = slugs.filter(s => s.includes('ghulam') || s.includes('noor'));
  console.log("Found:", target);
} else {
  console.log("No slugs found at all.");
}
