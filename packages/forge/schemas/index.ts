// Do not edit this file manually
import { togetherAi } from '@typebot.io/together-ai-block'
import { elevenlabs } from '@typebot.io/elevenlabs-block'
import { difyAi } from '@typebot.io/dify-ai-block'
import { mistral } from '@typebot.io/mistral-block'
import { qrCode } from '@typebot.io/qrcode-block'
import { chatNode } from '@typebot.io/chat-node-block'
import { calCom } from '@typebot.io/cal-com-block'
import { zemanticAi } from '@typebot.io/zemantic-ai-block'
import { openAIBlock } from '@typebot.io/openai-block'
import {
  BlockDefinition,
  parseBlockCredentials,
  parseBlockSchema,
} from '@typebot.io/forge'
import { enabledBlocks } from '@typebot.io/forge-repository'
import { z } from '@typebot.io/forge/zod'

export const forgedBlocks = [
  openAIBlock,
  zemanticAi,
  calCom,
  chatNode,
  qrCode,
  difyAi,
  mistral,
  elevenlabs,
  togetherAi,
] as BlockDefinition<(typeof enabledBlocks)[number], any, any>[]

export type ForgedBlockDefinition = (typeof forgedBlocks)[number]

export const forgedBlockSchemas = forgedBlocks.map(parseBlockSchema)
export type ForgedBlock = z.infer<(typeof forgedBlockSchemas)[number]>

export const forgedCredentialsSchemas = forgedBlocks
  .filter((b) => b.auth)
  .map(parseBlockCredentials)
