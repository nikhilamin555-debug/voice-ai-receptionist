export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-center mb-6">VoiceAI - AI Receptionist</h1>
        <p className="text-xl text-center text-gray-600 mb-12">24/7 Intelligent Call Answering & Appointment Booking</p>
        
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-12 text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Never Miss a Call Again</h2>
          <p className="text-lg mb-8">Smart AI that answers calls, books appointments, solves queries, and follows up automatically</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">Start Free Trial</button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="border border-gray-200 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">24/7 Call Answering</h3>
            <p className="text-gray-600">Never miss a call. Handles multiple simultaneous calls with zero wait time.</p>
          </div>
          <div className="border border-gray-200 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Smart Appointment Booking</h3>
            <p className="text-gray-600">Syncs with Google/Outlook. Books appointments in real-time without double-booking.</p>
          </div>
          <div className="border border-gray-200 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Lead Qualification</h3>
            <p className="text-gray-600">Captures caller info, qualifies leads, and integrates directly with your CRM.</p>
          </div>
        </div>
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[{name: 'Starter', price: 99, features: ['200 min/mo', '24/7 Answering', 'Basic Booking']}, 
              {name: 'Professional', price: 249, features: ['600 min/mo', 'Advanced Booking', 'CRM Integration'], popular: true},
              {name: 'Enterprise', price: 'Custom', features: ['Unlimited', 'Voice Cloning', 'API Access']}].map(plan => (
              <div key={plan.name} className={`p-8 rounded-lg border-2 ${plan.popular ? 'border-blue-600 shadow-lg' : 'border-gray-200'}`}>
                {plan.popular && <div className="text-blue-600 font-bold mb-2">Most Popular</div>}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">${plan.price}</div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map(f => <li key={f} className="text-gray-600 text-sm">✓ {f}</li>)}
                </ul>
                <button className={`w-full py-2 rounded-lg font-bold ${plan.popular ? 'bg-blue-600 text-white' : 'border border-blue-600 text-blue-600'}`}>Get Started</button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
