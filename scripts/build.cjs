const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const templatePath = path.join(rootDir, 'index.template.html');
const rootIndexPath = path.join(rootDir, 'index.html');
const distIndexPath = path.join(rootDir, 'dist', 'index.html');
const distAssetsDir = path.join(rootDir, 'dist', 'assets');
const rootAssetsDir = path.join(rootDir, 'assets');

console.log('[Build] Step 1: Preparing index.html from index.template.html for Vite...');
fs.copyFileSync(templatePath, rootIndexPath);

try {
  console.log('[Build] Step 2: Running Vite build...');
  execSync('npx vite build', { stdio: 'inherit', cwd: rootDir });

  console.log('[Build] Step 3: Syncing dist/index.html to root index.html...');
  if (fs.existsSync(distIndexPath)) {
    fs.copyFileSync(distIndexPath, rootIndexPath);
    console.log('[Build] Root index.html successfully updated with compiled bundle.');
  }

  console.log('[Build] Step 4: Syncing dist/assets to root assets/...');
  if (fs.existsSync(distAssetsDir)) {
    if (!fs.existsSync(rootAssetsDir)) {
      fs.mkdirSync(rootAssetsDir, { recursive: true });
    }
    const files = fs.readdirSync(distAssetsDir);
    for (const file of files) {
      fs.copyFileSync(path.join(distAssetsDir, file), path.join(rootAssetsDir, file));
    }
    console.log(`[Build] Synced ${files.length} asset files to root assets/.`);
  }
  console.log('[Build] Complete! Production bundle ready for GitHub Pages.');
} catch (err) {
  console.error('[Build Error]', err);
  process.exit(1);
}
