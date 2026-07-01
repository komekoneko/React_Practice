Weather App 🌤️

都市名を入力すると、その地域の現在の天気をリアルタイムで表示するシンプルな天気アプリです。
React の学習と API 連携の練習として制作しました。

🔗 デモ: https://weather-fawn-sigma.vercel.app/


✨ 主な機能


都市名・国名を入力して現在の天気を検索
現在の気温をわかりやすく大きく表示
天気に応じたアイコンを表示（晴れ・くもり・雨など）
天気の状態を日本語で表示
存在しない都市を入力した場合のエラーハンドリング



🛠️ 使用技術

技術用途ReactUI 構築（関数コンポーネント / Hooks）Vite開発環境・ビルドツールOpenWeatherMap API天気データの取得CSSグラスモーフィズムによる UI デザインVercelデプロイ・ホスティング


💡 工夫した点


API 連携: fetch と async/await を使い、外部 API から非同期でデータを取得
状態管理: useState で入力値と取得した天気データを管理
エラーハンドリング: res.ok をチェックし、都市が見つからない場合にアラートを表示
UI デザイン: backdrop-filter を使ったグラスモーフィズム、背景のグラデーション、結果表示時のフェードインアニメーションを実装
環境変数: API キーをコードに直書きせず .env で管理



🚀 ローカルでの実行方法

1. リポジトリをクローン

bashgit clone https://github.com/<your-account>/<repo-name>.git
cd <repo-name>

2. パッケージをインストール

bashnpm install

3. API キーを設定

OpenWeatherMap で無料の API キーを取得し、
プロジェクトのルートに .env ファイルを作成して以下を記述します。

VITE_WEATHER_API_KEY=あなたのAPIキー


コード側では import.meta.env.VITE_WEATHER_API_KEY で読み込みます。



4. 開発サーバーを起動

bashnpm run dev

ブラウザで http://localhost:5173 を開くと動作を確認できます。


📝 今後の改善予定


天気の種類に応じて背景色を変える（晴れ→青空、雨→グレーなど）
現在地の天気を自動で表示（Geolocation API）
5日間の天気予報の追加
ローディング表示の追加
