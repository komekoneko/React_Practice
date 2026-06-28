# 📝 TodoApp

> シンプルで直感的な Todo 管理 Web アプリです！

🔗 デモ: https://todo-seven-theta-86.vercel.app

---

## ✨ 機能

- 入力欄に書いてボタンひとつで Todo を追加
- 各 Todo を個別に削除
- ダークモード自動対応（OS の設定に追従）
- 追加時のスライドインアニメーション
- 完了状態のチェック機能
- `key` にインデックスではなく一意の ID を使用

---

## 🛠 技術スタック

| 項目 | 内容 |
| --- | --- |
| フレームワーク | React 18 |
| ビルドツール | Vite |
| スタイリング | CSS |
| 状態管理 | useState |
| デプロイ | Vercel |

---

## 🚀 ローカルで動かす

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
npm install
npm run dev
```

ブラウザで `http://localhost:5173` を開く。

---

## 📁 ディレクトリ構成

```
TodoApp/todo
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

- `useState` で入力値と Todo 配列を管理
- `form` の `onSubmit` で送信を処理し、Enter キーでも追加可能
- 削除は `filter` で対象インデックスを除外して実装
- カラーや角丸を CSS 変数で一元管理し、ライト / ダーク両テーマに対応

---

## 🔧 今後の改善案

- `localStorage` への保存（リロード後もデータを保持）
- 編集機能
