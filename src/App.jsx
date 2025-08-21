import './App.css'
import PricingGrid from './components/PricingGrid'

export default function App() {

  return (
    <main className='min-h-screen px-4 bg-dark py-12'>
      <section className='max-w-6xl mx-auto text-center'>
        <h1 className='text-4xl font-extrabold tracking-tight'>Simple Pricing</h1>
        <p className='text-gray-600 mt-3'>Choose a plan that scales with you.</p>
        <PricingGrid />
      </section>
    </main>
  )
}

