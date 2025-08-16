import Head from 'next/head'
import Link from 'next/link'

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service - Hordle</title>
        <meta name="description" content="Hordle's terms of service and user agreement." />
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
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            <p className="text-gray-600 mb-8">Last updated: August 16, 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Welcome to Hordle</h2>
              <p className="text-gray-700">
                These Terms of Service govern your use of Hordle, the social bookmarking app that helps you 
                save, organize, and discover web content. By using Hordle, you agree to these terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Using Hordle</h2>
              <div className="text-gray-700 space-y-4">
                <p><strong>What You Can Do:</strong></p>
                <ul className="space-y-2">
                  <li>Save and organize bookmarks for personal use</li>
                  <li>Create and share collections with others</li>
                  <li>Discover content through our social features</li>
                  <li>Connect with people who share similar interests</li>
                </ul>
                
                <p><strong>What You Can't Do:</strong></p>
                <ul className="space-y-2">
                  <li>Share illegal, harmful, or inappropriate content</li>
                  <li>Violate others' intellectual property rights</li>
                  <li>Spam or abuse other users</li>
                  <li>Attempt to hack or disrupt our service</li>
                  <li>Use Hordle for any commercial purposes without permission</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Content</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  You own the bookmarks, notes, and collections you create. When you share content publicly:
                </p>
                <ul className="space-y-2">
                  <li>You grant us permission to display and share that content within Hordle</li>
                  <li>You're responsible for ensuring you have the right to share any content</li>
                  <li>You can delete your content at any time</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privacy & Data</h2>
              <p className="text-gray-700">
                Your privacy is important to us. Please review our{' '}
                <Link href="/privacy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </Link>{' '}
                to understand how we collect and use your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Availability</h2>
              <p className="text-gray-700">
                While we strive to keep Hordle running smoothly, we can't guarantee 100% uptime. 
                We may need to temporarily interrupt service for maintenance or updates.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Account Termination</h2>
              <div className="text-gray-700 space-y-4">
                <p>You can delete your account at any time from within the app.</p>
                <p>
                  We may suspend or terminate accounts that violate these terms, but we'll try to 
                  work with you to resolve issues when possible.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Beta Service</h2>
              <p className="text-gray-700">
                Hordle is currently in beta. This means we're still improving the service and 
                some features may change or experience occasional issues. Thanks for your patience 
                as we build something great together!
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimer</h2>
              <p className="text-gray-700">
                Hordle is provided "as is" without warranties. While we work hard to provide a great service, 
                we can't guarantee it will always work perfectly or meet all your needs.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-700">
                We may update these terms occasionally. We'll notify you of significant changes 
                through the app or email.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700">
                Questions about these terms? Email us at{' '}
                <a href="mailto:legal@hordle.app" className="text-blue-600 hover:underline">
                  legal@hordle.app
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