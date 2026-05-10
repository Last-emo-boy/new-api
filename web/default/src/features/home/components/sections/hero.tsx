/*
Copyright (C) 2023-2026 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/
import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useSystemConfig } from '@/hooks/use-system-config'
import { Button } from '@/components/ui/button'
import { HeroTerminalDemo } from '../hero-terminal-demo'

interface HeroProps {
  className?: string
  isAuthenticated?: boolean
}

export function Hero(props: HeroProps) {
  const { t } = useTranslation()
  const { systemName } = useSystemConfig()

  return (
    <section className='relative z-10 flex flex-col items-center overflow-hidden px-6 pt-28 pb-16 md:pt-36 md:pb-24'>
      <div
        aria-hidden
        className='absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom,black_0%,transparent_78%)] bg-[size:3rem_3rem] opacity-35'
      />
      <div
        aria-hidden
        className='bg-border absolute top-24 left-1/2 -z-10 h-px w-[min(40rem,80vw)] -translate-x-1/2'
      />

      <div className='flex max-w-3xl flex-col items-center text-center'>
        <h1
          className='landing-animate-fade-up text-[clamp(2rem,5.5vw,3.5rem)] leading-[1.08] font-semibold tracking-tight'
          style={{ animationDelay: '0ms' }}
        >
          {t('Unified API Gateway for')}
          <br />
          <span className='text-foreground/70'>{t('All Your AI Models')}</span>
        </h1>
        <p
          className='landing-animate-fade-up text-muted-foreground mt-5 max-w-xl text-base leading-relaxed opacity-0 md:text-lg'
          style={{ animationDelay: '80ms' }}
        >
          {systemName}{' '}
          {t(
            'is an open-source AI API gateway for self-hosted deployments. Connect multiple upstream services, manage models, keys, quotas, logs, and routing policies in one place.'
          )}
        </p>
        <div
          className='landing-animate-fade-up mt-8 flex items-center gap-3 opacity-0'
          style={{ animationDelay: '160ms' }}
        >
          {props.isAuthenticated ? (
            <Button
              className='group rounded-md'
              render={<Link to='/dashboard' />}
            >
              {t('Go to Dashboard')}
              <ArrowRight
                data-icon='inline-end'
                className='transition-transform duration-200 group-hover:translate-x-0.5'
              />
            </Button>
          ) : (
            <>
              <Button
                className='group rounded-md'
                render={<Link to='/sign-up' />}
              >
                {t('Get Started')}
                <ArrowRight
                  data-icon='inline-end'
                  className='transition-transform duration-200 group-hover:translate-x-0.5'
                />
              </Button>
              <Button
                variant='outline'
                className='rounded-md'
                render={<Link to='/pricing' />}
              >
                {t('View Pricing')}
              </Button>
            </>
          )}
        </div>
      </div>

      <div
        className='landing-animate-fade-up w-full opacity-0'
        style={{ animationDelay: '300ms' }}
      >
        <HeroTerminalDemo />
      </div>
    </section>
  )
}
