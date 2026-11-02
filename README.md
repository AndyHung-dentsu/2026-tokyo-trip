# 冬日旅帖 · 東京與河口湖

2026/12/1–12/6、4 位成人的繁體中文旅行手冊。Day 1–3 有詳細行程；Day 4–6 保留待規劃狀態。直接顯示日期切換與時間軸、放大字體、手機優先、無後端與追蹤，無外部字型或圖片依賴。

## 開發與驗證

使用 Node.js 24：

```sh
npm ci
npm test
npm run build
npm run preview
```

預覽：http://localhost:4173/2026-tokyo-trip/

瀏覽器測試：`npm run test:ui`。預設使用 `/usr/bin/chromium`，可用 `CHROMIUM_PATH` 指定已安裝的 Chromium。測試 375、759、768、1024、1440px 的六天頁面與全部收合／展開狀態，逐一檢查所有可見文字節點的 computed font-size 至少 18px，並驗證、收合、待辦儲存與取消、鍵盤、深連結、儲存不可用降級、外連格式與子路徑資產。截圖輸出 `test-results/`（不提交）。

## 內容與隱私

- 行程集中在 `src/data.js`，畫面在 `src/app.js`、`src/style.css`。
- 所有行程時間為日本時間；購票提醒明確標註台灣時間。價格是規劃參考，不是即時查詢。
- 本機待辦以 `winter-trip-2026-todos-v1` 儲存；不會送出資料、不會自動訂票或訂房，不會跨裝置同步。待辦 ID 對應日期及項目順序，修改既有清單順序時應調整儲存版本。
- 公開 repository 不放訂房編號、私人訂單或入住表單、聯絡資訊、付款或登入資料。
- 外連僅使用提供的公開官方／Tabelog 連結，以及以真實場所名稱產生的 Google Maps 搜尋連結。連結可開新分頁；營業資訊請出發前核對。

## GitHub Pages

工作流程 `.github/workflows/pages.yml` 在 main push 後測試、建置與部署 `dist/`，使用標準 GitHub Pages OIDC 部署權限。

Repository **Settings → Pages → Build and deployment → Source** 必須設為 **GitHub Actions**。如果 Pages 尚未啟用，部署會失敗；啟用後可在 Actions 重新執行工作流程。預期網址（須確認成功部署後才可用）：https://andyhung-dentsu.github.io/2026-tokyo-trip/

資產皆使用相對網址，支援 `/2026-tokyo-trip/` 子路徑。沒有使用 Sites hosting。
