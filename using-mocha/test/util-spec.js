// ブラウザ上でmochaを使ってテスト結果を出力する
describe('jadgeのテスト', function() {
  it('30点以下なら赤点を返す', function() {
    if (jadge(30) === '赤点') {
    } else {
      // 期待しない結果の時は例外を投げる 
      throw new Error('失敗');
    }
  });

  it('30点より上なら赤点を返す', function() {
    if (jadge(31) === '赤点') {
    } else {
      throw new Error('失敗');
    }
  });
});
