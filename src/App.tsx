import { MinimalHeader } from './components/headers/MinimalHeader';
import { ModernHeader } from './components/headers/ModernHeader';
import { ClassicHeader } from './components/headers/ClassicHeader';
import { GlassHeader } from './components/headers/GlassHeader';

function App() {
  return (
    <div className="space-y-16">
      <section>
        <MinimalHeader />
        <div className="h-96 bg-gray-50 flex items-center justify-center">
          <h2 className="text-2xl text-gray-600">Minimal Header</h2>
        </div>
      </section>

      <section>
        <ModernHeader />
        <div className="h-96 bg-gray-50 flex items-center justify-center">
          <h2 className="text-2xl text-gray-600">Modern Header</h2>
        </div>
      </section>

      <section>
        <ClassicHeader />
        <div className="h-96 bg-gray-50 flex items-center justify-center">
          <h2 className="text-2xl text-gray-600">Classic Header</h2>
        </div>
      </section>

      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-20"></div>
        <div className="relative">
          <GlassHeader />
          <div className="h-[calc(100vh-5rem)] flex items-center justify-center">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-light text-white">Glass Header</h2>
              <p className="text-gray-400 max-w-md">Elegant glassmorphism effect with dark mode support and smooth animations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;