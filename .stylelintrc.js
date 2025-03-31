module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
  ignoreFiles: ['node_modules/**/*', 'dist/**/*'],
  rules: {
    'at-rule-no-unknown': null, // 不明な@ルールを許可
    'no-descending-specificity': null, // 詳細度の低いセレクタを許可
    'block-no-empty': true, // 空のブロックを許可しない
    'declaration-block-no-duplicate-properties': true, // プロパティの重複を許可しない
    'property-no-unknown': true, // 不明なプロパティを許可しない
    'font-family-no-duplicate-names': true, // フォントファミリーの重複を許可しない
    'color-no-invalid-hex': true, // 無効な16進数カラーを許可しない
    'selector-pseudo-class-no-unknown': [
      // 不明な疑似クラスを許可しない
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
  fix: false, //true-> 自動修正を有効にする
};
