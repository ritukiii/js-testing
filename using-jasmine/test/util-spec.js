// ブラウザ上でmochaを使ってテスト結果を出力する
describe('jadgeのテスト', function() {
  it('30点以下なら赤点を返す', function() {
    expect(jadge(30)).toBe('赤点');
  });

  it('30点より上なら赤点を返す', function() {
    expect(jadge(31)).toBe('赤点');
  });
});
