import { ProductHero } from '../components/product/ProductHero'
import { ProductModules } from '../components/product/ProductModules'
import { ProductPreview } from '../components/product/ProductPreview'
import { ProductArchitecture } from '../components/product/ProductArchitecture'
import { ProductNvidia } from '../components/product/ProductNvidia'
import { ProductGovernance } from '../components/product/ProductGovernance'
import { ProductRoadmap } from '../components/product/ProductRoadmap'
import { ProductUseCases } from '../components/product/ProductUseCases'
import { ProductCta } from '../components/product/ProductCta'
import { site } from '../data/content'

export function ProductPage() {
  return (
    <main>
      <ProductHero />
      <ProductModules />
      <ProductPreview />
      <ProductArchitecture />
      <ProductNvidia />
      <ProductGovernance />
      <ProductRoadmap />
      <ProductUseCases />
      <ProductCta appUrl={site.appUrl} />
    </main>
  )
}