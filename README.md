# @akong/core

akong design system 聚合包 · 类 antd 一行 import 全套 · 跨端（Web + React Native）。

## 安装

```bash
npm i github:yarnovo/akong-core
```

自动拉所有依赖（tokens + 9 组件 · 都 public · 不需要 token）。

## 用法

```tsx
import { Button, NoteCard, ServiceCard, BottomNav, Avatar, AgentSwitcher } from '@akong/core'
import '@akong/core/style.css'  // 一行引全套样式 + tokens (Web)

<Button variant="primary">下单</Button>
<NoteCard ... />
<ServiceCard ... />
```

React Native 项目同 import 路径 · Metro 自动 resolve `.native.tsx`：

```tsx
import { Button } from '@akong/core'

<Button variant="primary" onPress={...}>下单</Button>
```

不需要 `import './style.css'`（RN 没 CSS · 组件用 inline `tokens.light/dark` 切色）。

## 包含

| 名 | 仓 | demo |
|---|---|---|
| Button | [akong-button](https://github.com/yarnovo/akong-button) | [demo](https://yarnovo.github.io/akong-button/) |
| NoteCard | [akong-note-card](https://github.com/yarnovo/akong-note-card) | [demo](https://yarnovo.github.io/akong-note-card/) |
| BottomNav | [akong-bottom-nav](https://github.com/yarnovo/akong-bottom-nav) | [demo](https://yarnovo.github.io/akong-bottom-nav/) |
| ServiceCard | [akong-service-card](https://github.com/yarnovo/akong-service-card) | [demo](https://yarnovo.github.io/akong-service-card/) |
| TopTabs | [akong-top-tabs](https://github.com/yarnovo/akong-top-tabs) | [demo](https://yarnovo.github.io/akong-top-tabs/) |
| AgentSwitcher | [akong-agent-switcher](https://github.com/yarnovo/akong-agent-switcher) | [demo](https://yarnovo.github.io/akong-agent-switcher/) |
| Avatar | [akong-avatar](https://github.com/yarnovo/akong-avatar) | [demo](https://yarnovo.github.io/akong-avatar/) |
| LazyImage | [akong-lazy-image](https://github.com/yarnovo/akong-lazy-image) | [demo](https://yarnovo.github.io/akong-lazy-image/) |
| Skeleton | [akong-skeleton](https://github.com/yarnovo/akong-skeleton) | [demo](https://yarnovo.github.io/akong-skeleton/) |
| Tokens | [akong-tokens](https://github.com/yarnovo/akong-tokens) | [demo](https://yarnovo.github.io/akong-tokens/) |

## 想用单组件不想全套

直接 npm i 单组件包：

```bash
npm i github:yarnovo/akong-button github:yarnovo/akong-tokens
```

```tsx
import { Button } from '@akong/button'
import '@akong/button/style.css'
import '@akong/tokens/style.css'
```

## 暗色

Web 自动跟系统 (`prefers-color-scheme: dark`) · 也支持手动 `<html class="dark">` 强制切。

RN 用 `useColorScheme()` hook · 组件内部自动切 `tokens.light` ↔ `tokens.dark`。
