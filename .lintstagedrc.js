const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx}': [
    () => 'tsc --incremental false --noEmit', // 型チェック--incremental falseによって、キャッシュを無効にしている
    buildEslintCommand, // next lint
    'prettier --write', // Prettierフォーマット
  ],
};
