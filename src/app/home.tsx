import { Button } from '@/components/ui/button'
import { CrownIcon } from 'lucide-react'
import { Fragment } from 'react/jsx-runtime'

const BUTTON_VARIANTS = [
  'default',
  'secondary',
  'ghost',
  'outline',
  'link',
  'destructive'
] as const

export default function HomePage () {
  return (
    <main className='max-w-7xl mx-auto p-4 space-y-4'>
      <h1 className='text-4xl font-light'>
        Shadcn Components
      </h1>
      <article className='w-fit p-4 border rounded-lg space-y-1 overflow-hidden'>
        <h2 className='mb-3 border-b rounded-t-lg pb-3'>
          Buttons
        </h2>
        <div className='w-fit p-4 grid grid-cols-[auto_auto_auto_auto] items-center gap-2 [&>button]:capitalize'>
          {BUTTON_VARIANTS.map((variant) => (
            <Fragment key={variant}>
              <Button size='lg' variant={variant}>
                Button<span>(lg)</span>
              </Button>
              <Button size='default' variant={variant}>
                Button<span>(default)</span>
              </Button>
              <Button size='sm' variant={variant}>
                Button<span>(sm)</span>
              </Button>
              <Button size='icon' variant={variant}>
                <CrownIcon />
              </Button>
            </Fragment>
          ))}
        </div>
      </article>
    </main>
  )
}
