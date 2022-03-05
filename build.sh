npm run build
rm -rf docs
mv build docs
git add -f docs 
git commit