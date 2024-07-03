mkdir sudoku-validator
cd sudoku-validator
npm init -y
npm install jest eslint webpack webpack-cli --save-dev
echo "node_modules/" > .gitignore
npx eslint --init
npm install --save-dev babel-loader @babel/core @babel/preset-env

