/**
 * @akong/core · 聚合包 · re-export 所有 akong 组件 + tokens
 *
 * 用法:
 *   import { Button, NoteCard, BottomNav, Avatar, ... } from '@akong/core'
 *   import '@akong/core/style.css'   // 一行引全套样式 + tokens
 *
 * 跨端: Web 跟 RN 都自动 resolve 各自实现 (Metro .native.tsx)
 */

export { tokens, lightTokens, darkTokens, cssVars } from '@akong/tokens'
export type { Tokens, LightTokens, DarkTokens } from '@akong/tokens'

export { Button } from '@akong/button'
export type { ButtonProps, ButtonVariant, ButtonSize } from '@akong/button'

export { NoteCard } from '@akong/note-card'
export type { NoteCardProps } from '@akong/note-card'

export { BottomNav } from '@akong/bottom-nav'
export type { BottomNavProps, BottomNavItem } from '@akong/bottom-nav'

export { ServiceCard } from '@akong/service-card'
export type { ServiceCardProps, ServiceCardSeller } from '@akong/service-card'

export { TopTabs } from '@akong/top-tabs'
export type { TopTabsProps } from '@akong/top-tabs'

export { AgentSwitcher } from '@akong/agent-switcher'
export type { AgentSwitcherProps, AgentSwitcherItem } from '@akong/agent-switcher'

export { Avatar } from '@akong/avatar'
export type { AvatarProps, AvatarSize, AvatarShape } from '@akong/avatar'

export { LazyImage } from '@akong/lazy-image'
export type { LazyImageProps } from '@akong/lazy-image'

export { Skeleton } from '@akong/skeleton'
export type { SkeletonProps, SkeletonVariant, SkeletonRadius } from '@akong/skeleton'
