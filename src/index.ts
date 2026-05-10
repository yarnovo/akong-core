/**
 * @aily-ui/core · 聚合包 · re-export 所有 aily-ui 组件 + tokens
 *
 * 用法:
 *   import { Button, BottomNav, Avatar, ... } from '@aily-ui/core'
 *   import '@aily-ui/core/style.css'   // 一行引全套样式 + tokens
 *
 * 跨端: Web 跟 RN 都自动 resolve 各自实现 (Metro .native.tsx)
 */

export { tokens, lightTokens, darkTokens, cssVars } from '@aily-ui/tokens'
export type { Tokens, LightTokens, DarkTokens } from '@aily-ui/tokens'

export { Button } from '@aily-ui/button'
export type { ButtonProps, ButtonVariant, ButtonSize } from '@aily-ui/button'

export { BottomNav } from '@aily-ui/bottom-nav'
export type { BottomNavProps, BottomNavItem } from '@aily-ui/bottom-nav'

export { Avatar } from '@aily-ui/avatar'
export type { AvatarProps, AvatarSize, AvatarShape } from '@aily-ui/avatar'

export { LazyImage } from '@aily-ui/lazy-image'
export type { LazyImageProps } from '@aily-ui/lazy-image'

export { Skeleton } from '@aily-ui/skeleton'
export type { SkeletonProps, SkeletonVariant, SkeletonRadius } from '@aily-ui/skeleton'

// === Icons (封装 lucide · 30 个) ===
export * from '@aily-ui/icons'

// === Chat (聊天场景 5 件套) ===
export { ChatBubble } from '@aily-ui/chat-bubble'
export type { ChatBubbleProps, ChatBubbleRole, ChatBubbleVariant, ChatBubbleStatus } from '@aily-ui/chat-bubble'

export { ChatInput } from '@aily-ui/chat-input'
export type { ChatInputProps } from '@aily-ui/chat-input'

export { TypingIndicator } from '@aily-ui/typing-indicator'
export type { TypingIndicatorProps } from '@aily-ui/typing-indicator'

export { ConversationItem } from '@aily-ui/conversation-item'
export type { ConversationItemProps } from '@aily-ui/conversation-item'

export { ChatLayout } from '@aily-ui/chat-layout'
export type { ChatLayoutProps } from '@aily-ui/chat-layout'

// === Auth (登录场景) ===
export { LoginFlow, PhoneInputStep, OtpInputStep } from '@aily-ui/auth-login'
export type {
  LoginFlowProps,
  PhoneInputStepProps,
  OtpInputStepProps,
  LoginStep,
  SendCodeResult,
  VerifyCodeResult,
} from '@aily-ui/auth-login'
