yarn build
git add .
git commit -m "build new version"
mv package.json package.backup.json
mv package.publish.json package.json
git add .
git commit -m "change package.json"
npm version patch
npm publish
mv package.json package.publish.json
mv package.backup.json package.json
git add .
git commit -m "up to new version"
