# ポートフォリオサイト
就活などで使用するためのポートフォリオを作成した。このREADME.mdではどのように作成したかを記述してある。

## 🌐 デプロイサイト

**Live Demo**: [https://raisei-ito-portfolio.vercel.app/](https://raisei-ito-portfolio.vercel.app/)

本サイトはVercelを使用してデプロイされており、上記URLから実際のポートフォリオサイトをご覧いただけます。

## 🌟 サイト概要

このポートフォリオサイトは、React + TypeScript + Tailwind CSSで構築された現代的なシングルページアプリケーション（SPA）です。

## 🚀 技術スタック

### フロントエンド
- **React 18** - UI構築のためのライブラリ
- **TypeScript** - 型安全性を確保
- **Tailwind CSS** - ユーティリティファーストCSSフレームワーク
- **Vite** - 高速なビルドツール

### UIコンポーネント
- **Radix UI** - アクセシブルなUIプリミティブ
- **Lucide React** - 美しいアイコンライブラリ
- **Shadcn/ui** - モダンなUIコンポーネント

### 開発・デプロイ
- **ESLint** - コード品質の維持
- **PostCSS** - CSS処理
- **Vercel** - 高速なデプロイプラットフォーム

## 📁 プロジェクト構造

```
project/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx          # ナビゲーションバー
│   │   ├── sections/
│   │   │   ├── Hero.tsx           # ヒーローセクション
│   │   │   ├── Skills.tsx         # スキル紹介
│   │   │   ├── Portfolio.tsx      # 制作実績
│   │   │   ├── Experience.tsx     # 経歴
│   │   │   └── Contact.tsx        # お問い合わせ
│   │   └── ui/                    # UIコンポーネント
│   ├── hooks/                     # カスタムフック
│   ├── lib/                       # ユーティリティ
│   ├── App.tsx                    # メインアプリ
│   └── main.tsx                   # エントリーポイント
├── public/                        # 静的ファイル
├── package.json                   # 依存関係
├── tailwind.config.js             # Tailwind設定
├── tsconfig.json                  # TypeScript設定
└── vite.config.ts                 # Vite設定
```

## 🛠️ セットアップ

### 前提条件
- Node.js (v18以上)
- npm または yarn

### インストール

1. リポジトリをクローン
```bash
git clone https://github.com/Raisei-Ito/portfolio_website.git
cd portfolio_website/project
```

2. 依存関係をインストール
```bash
npm install
```

3. 開発サーバーを起動
```bash
npm run dev
```

4. ブラウザで `http://localhost:5173` を開く

### ビルド

```bash
npm run build
```

### プレビュー

```bash
npm run preview
```

## 📞 お問い合わせ

- **メール**: cok14667@ict.nitech.ac.jp
- **GitHub**: [https://github.com/Raisei-Ito](https://github.com/Raisei-Ito)
- **Qiita**: [https://qiita.com/raisei](https://qiita.com/raisei)

## 📝 変更履歴

### 2025年6月26日
- **モバイルナビゲーションのUI改善**
  - スマートフォン表示時のナビゲーションメニューのテキスト色を青色から白色に変更
  - 背景色を白色から黒色に変更してコントラストを向上
  - ホバー効果も調整し、ユーザビリティを向上