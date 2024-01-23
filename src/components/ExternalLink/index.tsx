import { ComponentProps, ReactNode } from 'react'
import { ExternalLinkContainer } from './style'
import { ArrowLineUpRight } from 'phosphor-react'

type ExternalLinkProps = {
  text: string
  icon?: ReactNode
  variant?: 'iconLeft'
} & ComponentProps<typeof ExternalLinkContainer>

export function ExternalLink({ text, icon, ...rest }: ExternalLinkProps) {
  return (
    <ExternalLinkContainer {...rest}>
      {text}
      {icon ?? <ArrowLineUpRight weight="fill" />}
    </ExternalLinkContainer>
  )
}
