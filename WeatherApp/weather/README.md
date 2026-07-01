# 🌤 WeatherApp
> 都市名や国名から現在の天気をサクッと調べられる Web アプリです！

🔗 デモ: https://ここにVercelのURL

---

## ✨ 機能

- 都市名・国名を入力して天気を検索
- 天気アイコン・気温・天気の説明を表示
- OpenWeatherMap API を使ったリアルタイムデータ取得

---

## 🛠 技術スタック

| 項目 | 内容 |
| --- | --- |
| フレームワーク | React 19 |
| ビルドツール | Vite |
| スタイリング | CSS |
| 状態管理 | useState |
| API | OpenWeatherMap |
| デプロイ | Vercel |

---

## 🚀 ローカルで動かす

```bash
git clone https://github.com/your-username/weather.git
cd weather
npm install
npm run dev
```

ブラウザで `http://localhost:5173` を開く。

> ⚠️ `.env` ファイルを作成し、`VITE_OPENWEATHER_API_KEY=your_api_key` を設定してください。

---

## 📁 ディレクトリ構成

```
WeatherApp/weather
├── public
├── src
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 💡 実装のポイント

- `useState` で入力値と天気データを管理
- `fetch` で OpenWeatherMap API を叩いてデータ取得
- 環境変数（`.env`）でAPIキーを管理し、GitHubへの漏洩を防止

---

## 🔧 今後の改善案

- 検索履歴の保存
- 複数都市の比較表示
- 週間予報の表示
