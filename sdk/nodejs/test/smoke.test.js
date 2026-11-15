// EN: Smoke test - verifies the package metadata and the compiled build.
// VI: Smoke test - kiem tra metadata goi va ban build da bien dich.
const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

test('package metadata is intact', () => {
  const pkg = require('../package.json');
  assert.strictEqual(typeof pkg.name, 'string');
  assert.ok(pkg.name.length > 0);
});

test('compiled output exists after build', () => {
  const dist = path.join(__dirname, '..', 'dist');
  assert.ok(fs.existsSync(dist), 'dist/ is missing - run npm run build first');
});
