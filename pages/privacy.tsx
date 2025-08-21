import Head from 'next/head'
import Link from 'next/link'

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Hordle</title>
        <meta name="description" content="Hordle's comprehensive privacy policy and data protection information." />
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

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">TL;DR - Your privacy matters</h3>
              <p className="text-blue-800">
                We collect only what's needed to make Hordle work great for you. We never sell your data, 
                and you control what's public or private. You can export or delete your data anytime.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">About This Policy</h2>
              <p className="text-gray-700 mb-4">
                This Privacy Policy explains how Hordle ("we," "our," or "us") collects, uses, and protects 
                your information when you use our social bookmarking service. By using Hordle, you agree to 
                the collection and use of information in accordance with this policy.
              </p>
              <p className="text-gray-700">
                We believe in transparency, so we've written this policy in plain English. If you have any 
                questions, please don't hesitate to reach out.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Information We Collect</h2>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Information You Provide</h3>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li><strong>Account Information:</strong> Email address, username, profile name, bio, and avatar preferences</li>
                <li><strong>Authentication Data:</strong> If you sign up with Google or Apple, we receive basic profile information</li>
                <li><strong>Bookmarks & Collections:</strong> Links you save, titles, descriptions, tags, and organizational collections</li>
                <li><strong>User-Generated Content:</strong> Comments, notes, and any text you add to bookmarks</li>
                <li><strong>Privacy Preferences:</strong> Your choices about what to keep private vs. public</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Information We Automatically Collect</h3>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li><strong>Usage Analytics:</strong> How you interact with the app, feature usage, and performance metrics</li>
                <li><strong>Device Information:</strong> Device type, operating system, app version, and unique device identifiers</li>
                <li><strong>Link Metadata:</strong> Previews, titles, and descriptions from links you bookmark (fetched from external sites)</li>
                <li><strong>Log Data:</strong> Error logs, crash reports, and technical diagnostic information</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Information from Third Parties</h3>
              <ul className="text-gray-700 space-y-2">
                <li><strong>OAuth Providers:</strong> Basic profile data when you sign in with Google or Apple</li>
                <li><strong>Link Preview Services:</strong> Metadata about websites you bookmark for rich previews</li>
                <li><strong>Analytics Services:</strong> Aggregated usage patterns to improve our service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Core Service Functionality</h3>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li>Create and maintain your account and profiles</li>
                <li>Store, organize, and sync your bookmarks across devices</li>
                <li>Generate link previews and metadata for better browsing</li>
                <li>Enable search and discovery within your collections</li>
                <li>Provide backup and data recovery services</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Social Features</h3>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li>Show "Great minds think alike!" notifications when users save similar content</li>
                <li>Display public collections in the explore section</li>
                <li>Enable discovery of interesting bookmarks from other users</li>
                <li>Calculate compatibility scores between users</li>
                <li>Suggest relevant content and connections</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Service Improvement</h3>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li>Analyze usage patterns to improve app performance</li>
                <li>Identify and fix bugs or technical issues</li>
                <li>Develop new features based on user behavior</li>
                <li>Optimize user interface and experience</li>
                <li>Ensure security and prevent abuse</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Communication</h3>
              <ul className="text-gray-700 space-y-2">
                <li>Send account-related notifications and updates</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Share important service announcements</li>
                <li>Send optional product updates and feature highlights (you can opt out)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing & Disclosure</h2>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <p className="text-green-800 font-medium">
                  <strong>We never sell your personal data.</strong> Your information is not a product.
                </p>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Public Information</h3>
              <p className="text-gray-700 mb-2">
                Only information you explicitly choose to make public is visible to others:
              </p>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li>Public collections and their bookmarks</li>
                <li>Your public profile information (name, bio, avatar)</li>
                <li>Public comments and interactions</li>
                <li>Aggregated, non-identifying usage statistics</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Service Providers</h3>
              <p className="text-gray-700 mb-2">
                We share limited data with trusted partners who help us operate Hordle:
              </p>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li><strong>Cloud Infrastructure:</strong> Supabase (database), Vercel (hosting)</li>
                <li><strong>Authentication:</strong> Google, Apple (for OAuth sign-in)</li>
                <li><strong>Analytics:</strong> Privacy-focused analytics to understand app usage</li>
                <li><strong>Link Processing:</strong> Services that help generate link previews</li>
              </ul>
              <p className="text-gray-700 mb-4">
                All service providers are bound by strict data protection agreements and can only use 
                your data to provide services to us.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Legal Requirements</h3>
              <p className="text-gray-700 mb-2">
                We may disclose your information when required by law or to:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>Comply with legal processes or government requests</li>
                <li>Protect the safety and security of our users</li>
                <li>Investigate potential violations of our Terms of Service</li>
                <li>Protect our legal rights and prevent fraud</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Privacy Rights & Controls</h2>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Account Controls</h3>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li><strong>Profile Privacy:</strong> Make your profile and collections public or private</li>
                <li><strong>Collection Visibility:</strong> Control who can see each collection individually</li>
                <li><strong>Discovery Settings:</strong> Choose whether to appear in explore recommendations</li>
                <li><strong>Notification Preferences:</strong> Customize what notifications you receive</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Data Rights</h3>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li><strong>Access:</strong> View and download all your data through the app settings</li>
                <li><strong>Portability:</strong> Export your bookmarks in standard formats (JSON, CSV, HTML)</li>
                <li><strong>Correction:</strong> Edit your profile information and bookmark details anytime</li>
                <li><strong>Deletion:</strong> Delete individual bookmarks, collections, or your entire account</li>
                <li><strong>Withdrawal:</strong> Revoke consent for optional data processing</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">How to Exercise Your Rights</h3>
              <p className="text-gray-700 mb-2">
                Most privacy controls are available directly in the app:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>Settings → Privacy Controls</li>
                <li>Settings → Export Data</li>
                <li>Settings → Delete Account</li>
                <li>For complex requests, email us at developer@hordle.app</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security & Protection</h2>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Technical Safeguards</h3>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li><strong>Encryption:</strong> All data is encrypted in transit (TLS 1.3) and at rest (AES-256)</li>
                <li><strong>Access Controls:</strong> Multi-factor authentication and role-based access</li>
                <li><strong>Infrastructure:</strong> Secure cloud hosting with regular security audits</li>
                <li><strong>Monitoring:</strong> 24/7 security monitoring and intrusion detection</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Organizational Measures</h3>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li>Regular security training for all team members</li>
                <li>Strict data access policies and audit logs</li>
                <li>Incident response procedures for potential breaches</li>
                <li>Regular third-party security assessments</li>
              </ul>

              <p className="text-gray-700">
                While we implement industry-leading security measures, no system is 100% secure. 
                We continuously monitor and improve our security practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention & Deletion</h2>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-3">How Long We Keep Your Data</h3>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li><strong>Account Data:</strong> Retained while your account is active</li>
                <li><strong>Bookmarks:</strong> Kept until you delete them or close your account</li>
                <li><strong>Usage Analytics:</strong> Aggregated and anonymized after 24 months</li>
                <li><strong>Log Data:</strong> Deleted after 90 days unless needed for security</li>
                <li><strong>Deleted Accounts:</strong> Permanently removed within 30 days</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">What Happens When You Delete Your Account</h3>
              <ul className="text-gray-700 space-y-2">
                <li>All your bookmarks and collections are permanently deleted</li>
                <li>Your profile information is removed from our systems</li>
                <li>Public content you shared becomes anonymized</li>
                <li>Some data may remain in backups for up to 30 days</li>
                <li>Legal or security records may be retained as required by law</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">International Users & Data Transfers</h2>
              <p className="text-gray-700 mb-4">
                Hordle is operated from the United States, but we welcome users worldwide. Your data 
                may be transferred to and processed in countries other than your own, including the 
                United States and European Union.
              </p>
              <p className="text-gray-700 mb-4">
                When we transfer personal data internationally, we ensure appropriate safeguards are 
                in place through:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>Standard contractual clauses approved by data protection authorities</li>
                <li>Adequacy decisions for transfers to countries with equivalent protection</li>
                <li>Privacy frameworks like the EU-US Data Privacy Framework (when applicable)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-700 mb-4">
                Hordle is not intended for children under 13 years of age. We do not knowingly collect 
                personal information from children under 13. If you believe we have collected information 
                from a child under 13, please contact us immediately and we will delete it.
              </p>
              <p className="text-gray-700">
                For users between 13-18, we recommend reviewing this policy with a parent or guardian.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies & Tracking Technologies</h2>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Essential Cookies</h3>
              <p className="text-gray-700 mb-2">We use cookies and similar technologies to:</p>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li>Keep you signed in to your account</li>
                <li>Remember your preferences and settings</li>
                <li>Ensure security and prevent fraud</li>
                <li>Provide core app functionality</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Analytics & Performance</h3>
              <p className="text-gray-700 mb-4">
                We use privacy-focused analytics to understand how Hordle is used and improve performance. 
                These are aggregated and don't identify individual users.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Your Choices</h3>
              <p className="text-gray-700">
                You can control cookies through your browser settings, but this may affect app functionality. 
                Essential cookies cannot be disabled without breaking core features.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices 
                or for legal reasons. When we make significant changes, we will:
              </p>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li>Update the "Last updated" date at the top of this policy</li>
                <li>Notify you through the app or by email</li>
                <li>Give you time to review changes before they take effect</li>
                <li>Highlight what's changed if the updates are significant</li>
              </ul>
              <p className="text-gray-700">
                Your continued use of Hordle after changes take effect means you accept the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                We're here to help with any questions about your privacy or this policy:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <ul className="text-gray-700 space-y-2">
                  <li><strong>Privacy Questions:</strong> <a href="mailto:developer@hordle.app" className="text-blue-600 hover:underline">developer@hordle.app</a></li>
                  <li><strong>General Support:</strong> <a href="mailto:developer@hordle.app" className="text-blue-600 hover:underline">developer@hordle.app</a></li>
                  <li><strong>Data Protection Officer:</strong> <a href="mailto:developer@hordle.app" className="text-blue-600 hover:underline">developer@hordle.app</a></li>
                </ul>
              </div>
              <p className="text-gray-700 mt-4">
                We aim to respond to all privacy-related inquiries within 72 hours.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <Link 
                  href="/" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  ← Back to Hordle
                </Link>
                <p className="text-sm text-gray-500">
                  Privacy Policy v2.0 | Effective August 16, 2025
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}