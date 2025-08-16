import Head from 'next/head'
import Link from 'next/link'

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Hordle</title>
        <meta name="description" content="Hordle's privacy policy and data protection information." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="px-6 py-4 border-b border-gray-200">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <img 
                src="/hordle_icon.svg" 
                alt="Hordle" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-gray-900">Hordle</span>
            </Link>
          </div>
        </header>

        <main className="px-6 py-12">
          <div className="max-w-4xl mx-auto prose prose-gray">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: August 16, 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Collect</h2>
              <p className="text-gray-700 mb-4">
                When you use Hordle, we collect information to provide and improve our service:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li><strong>Account Information:</strong> Email, username, and profile details you provide</li>
                <li><strong>Bookmarks:</strong> Links you save, along with any notes or tags you add</li>
                <li><strong>Usage Data:</strong> How you interact with the app to improve our service</li>
                <li><strong>Device Information:</strong> Basic device info for app functionality and support</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Data</h2>
              <ul className="text-gray-700 space-y-2">
                <li>Provide and maintain the Hordle service</li>
                <li>Send "Great minds think alike!" notifications when users save similar content</li>
                <li>Show you relevant collections and connections</li>
                <li>Improve app functionality and user experience</li>
                <li>Send important updates about your account or our service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Sharing</h2>
              <p className="text-gray-700 mb-4">
                We <strong>never sell your personal data</strong>. We only share information in these limited cases:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li><strong>Public Collections:</strong> Collections you choose to make public are visible to other users</li>
                <li><strong>Service Providers:</strong> Trusted partners who help us run the service (like cloud hosting)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our users' safety</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
              <ul className="text-gray-700 space-y-2">
                <li>Access and download your data anytime</li>
                <li>Delete your account and all associated data</li>
                <li>Control your privacy settings within the app</li>
                <li>Opt out of non-essential communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700">
                We use industry-standard security measures to protect your data, including encryption 
                and secure cloud infrastructure. However, no system is 100% secure, so we can't guarantee 
                absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibent text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700">
                Questions about privacy? Email us at{' '}
                <a href="mailto:privacy@hordle.app" className="text-blue-600 hover:underline">
                  privacy@hordle.app
                </a>
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link 
                href="/" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                ← Back to Hordle
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}