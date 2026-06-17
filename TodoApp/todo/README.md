TodoApp

シンプルで使いやすい Todo 管理アプリです。React で構築し、ダークモード対応・アニメーション付きのモダンな UI を備えています。

🔗 デモ: https://todo-seven-theta-86.vercel.app

機能


✅ Todo の追加（空入力時はアラートで通知）
🗑️ Todo の個別削除
🌗 ダークモード自動対応（prefers-color-scheme）
✨ 追加時のスライドインアニメーション
📱 レスポンシブ対応（スマホ幅でレイアウト最適化）


使用技術


React（Hooks: useState）
CSS（CSS 変数によるテーマ管理 / Grid レイアウト）
Vercel（ホスティング）


使い方


入力欄に Todo を記入する
「送信」ボタン（または Enter）で追加
各 Todo の「削除」ボタンで削除


ローカルでの起動

bash# 依存パッケージのインストール
npm install

# 開発サーバーの起動
npm run dev

実装のポイント


useState で入力値（input）と Todo 配列（arry）を管理
form の onSubmit で送信を処理し、Enter キーでも追加可能
削除は filter で対象インデックスを除外して実装
カラー・余白・角丸などを CSS 変数で一元管理し、ライト/ダーク両テーマに対応


今後の改善案


localStorage への保存（リロード後もデータを保持）
完了状態のチェック機能
編集機能
key にインデックスではなく一意の ID を使用
