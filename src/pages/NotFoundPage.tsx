import { Logo } from '../components/ui/Logo'
import { Button } from '../components/ui/Button'

export function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--soft-grey)] px-4">
      <div className="card-on-soft w-full max-w-lg rounded-panel p-10 text-center">
        <Logo className="mb-8 justify-center" />
        <p className="font-heading text-6xl font-extrabold text-[var(--brand)]">404</p>
        <h1 className="mt-4 font-heading text-2xl font-bold uppercase text-navy">
          Page not found
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/" variant="primary">
            Back to home
          </Button>
        </div>
      </div>
    </div>
  )
}
