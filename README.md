# @aily-ui/core

aily-ui design system 聚合包 · 类 antd 一行 import 全套 · 跨端（Web + React Native）。

## 安装

```bash
npm i github:yarnovo/aily-ui-core
```

自动拉所有依赖（tokens + 组件 · 都 public · 不需要 token）。

## 用法

```tsx
import { Button, BottomNav, Avatar, LoginFlow } from '@aily-ui/core'
import '@aily-ui/core/style.css'  // 一行引全套样式 + tokens (Web)

<Button variant="primary">下单</Button>
<BottomNav items={[...]} />
<Avatar src="..." />
```

React Native 项目同 import 路径 · Metro 自动 resolve `.native.tsx`：

```tsx
import { Button } from '@aily-ui/core'

<Button variant="primary" onPress={...}>下单</Button>
```

不需要 `import './style.css'`（RN 没 CSS · 组件用 inline `tokens.light/dark` 切色）。

## 包含

| 名 | 仓 | demo |
|---|---|---|
| Button | [aily-ui-button](https://github.com/yarnovo/aily-ui-button) | [demo](https://yarnovo.github.io/aily-ui-button/) |
| BottomNav | [aily-ui-bottom-nav](https://github.com/yarnovo/aily-ui-bottom-nav) | [demo](https://yarnovo.github.io/aily-ui-bottom-nav/) |
| Avatar | [aily-ui-avatar](https://github.com/yarnovo/aily-ui-avatar) | [demo](https://yarnovo.github.io/aily-ui-avatar/) |
| AuthLogin | [aily-ui-auth-login](https://github.com/yarnovo/aily-ui-auth-login) | [demo](https://yarnovo.github.io/aily-ui-auth-login/) · 6 provider (phone-sms / email / username / google / wechat / qq) |
| LazyImage | [aily-ui-lazy-image](https://github.com/yarnovo/aily-ui-lazy-image) | [demo](https://yarnovo.github.io/aily-ui-lazy-image/) |
| Skeleton | [aily-ui-skeleton](https://github.com/yarnovo/aily-ui-skeleton) | [demo](https://yarnovo.github.io/aily-ui-skeleton/) |
| Tokens | [aily-ui-tokens](https://github.com/yarnovo/aily-ui-tokens) | [demo](https://yarnovo.github.io/aily-ui-tokens/) |

## 想用单组件不想全套

直接 npm i 单组件包：

```bash
npm i github:yarnovo/aily-ui-button github:yarnovo/aily-ui-tokens
```

```tsx
import { Button } from '@aily-ui/button'
import '@aily-ui/button/style.css'
import '@aily-ui/tokens/style.css'
```

## 暗色

Web 自动跟系统 (`prefers-color-scheme: dark`) · 也支持手动 `<html class="dark">` 强制切。

RN 用 `useColorScheme()` hook · 组件内部自动切 `tokens.light` ↔ `tokens.dark`。

## 新 demo 站规约

起新 aily-ui 组件仓 (`yarnovo/aily-ui-X`) · `demo/index.html` 必含:

1. 右上角 `← 回 aily-ui 总站` link → https://yarnovo.github.io/aily-ui-core/
2. 用 `var(--ak-*)` token · 不 hardcode 色
3. light + dark 双模 (右上角 "切换暗色" 按钮)

stack 排开（防 fixed 撞）:
- top:16px right:16px → `← 回 aily-ui 总站` (新)
- top:64px right:16px → `切换暗色` (旧)

模板:

```html
<a href="https://yarnovo.github.io/aily-ui-core/" class="back-to-index">← 回 aily-ui 总站</a>
```

```css
.back-to-index {
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 100;
  padding: 8px 16px;
  background: var(--ak-bg-elevated);
  border: 1px solid var(--ak-border-subtle);
  border-radius: var(--ak-radius-full);
  color: var(--ak-fg-muted);
  text-decoration: none;
  font-size: var(--ak-text-sm);
  box-shadow: var(--ak-shadow-sm);
  transition: all 0.2s;
}
.back-to-index:hover {
  background: var(--ak-bg-hover);
  color: var(--ak-fg);
}
```
