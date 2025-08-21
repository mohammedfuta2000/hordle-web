import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Help() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "What is Hordle?",
      answer: "Hordle is a social bookmarking app that helps you save, organize, and discover amazing web content. You can create collections, connect with people who share similar interests, and get notified when someone saves the same links as you!"
    },
    {
      question: "How do I get started?",
      answer: "Download the Hordle app from the App Store or Google Play Store. Create an account using Google, Apple, or email, then start saving your first bookmarks by sharing URLs from your browser or other apps to Hordle."
    },
    {
      question: "What are 'Great minds think alike!' notifications?",
      answer: "When you save a link that someone else has already saved, you'll both get a fun notification saying 'Great minds think alike!' This helps you discover people with similar interests and builds connections through shared content."
    },
    {
      question: "How do collections work?",
      answer: "Collections are themed groups of bookmarks you can create and share. Think of them like playlists for links! You can make them public to share with others, or keep them private for personal organization. Public collections can go viral when shared!"
    },
    {
      question: "Can I have multiple profiles?",
      answer: "Yes! You can create multiple profiles for different interests or aspects of your life. For example, you might have one profile for work-related bookmarks and another for personal hobbies."
    },
    {
      question: "How do I share a collection?",
      answer: "In the app, go to your collection and tap the share button. You can copy the link, share to social media, or generate a QR code. Anyone can view public collections on the web, and they'll be encouraged to download the app to see more!"
    },
    {
      question: "Is Hordle free?",
      answer: "Yes! Hordle is completely free to download and use. We believe in making great tools accessible to everyone who wants to organize and discover amazing content."
    },
    {
      question: "How do I delete my account?",
      answer: "You can delete your account anytime from the app settings. Go to Profile → Settings → Account → Delete Account. This will permanently remove all your data."
    },
    {
      question: "Can I import bookmarks from my browser?",
      answer: "Currently, you'll need to save bookmarks individually through the share function. We're working on import features for future updates!"
    },
    {
      question: "Why can't I find someone's collection?",
      answer: "Collections might be set to private, or the link might be incorrect. Only public collections can be viewed by others. If you think there's an issue, contact us!"
    }
  ]

  return (
    <>
      <Head>
        <title>Help & Support - Hordle</title>
        <meta name="description" content="Get help with Hordle, the social bookmarking app. Find answers to common questions and learn how to use Hordle effectively." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Header */}
        <header className="px-6 py-4 bg-white shadow-sm">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <img 
                src="/hordle_icon.svg" 
                alt="Hordle" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-gray-900">Hordle</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/#download" className="text-blue-600 hover:text-blue-700 font-medium">
                Download App
              </Link>
            </div>
          </div>
        </header>

        <main className="px-6 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Help & Support</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to know about using Hordle to save, organize, and discover amazing content.
              </p>
            </div>

            {/* Quick Start Guide */}
            <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Start Guide</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">1. Download</h3>
                  <p className="text-sm text-gray-600">Get Hordle from the App Store or Google Play</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">👤</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">2. Sign Up</h3>
                  <p className="text-sm text-gray-600">Create your account and customize your profile</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🔖</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">3. Save Links</h3>
                  <p className="text-sm text-gray-600">Share URLs from any app to start your collection</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">4. Connect</h3>
                  <p className="text-sm text-gray-600">Discover people with similar interests!</p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                      <span className={`text-gray-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                        ↓
                      </span>
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Features Overview */}
            <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Smart Bookmarking</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Rich link previews with images and descriptions</li>
                    <li>• Add personal notes and tags to organize</li>
                    <li>• Multiple profiles for different interests</li>
                    <li>• Fast search and filtering</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Social Discovery</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• "Great minds think alike!" notifications</li>
                    <li>• Find people with similar interests</li>
                    <li>• Discover trending content</li>
                    <li>• Share collections publicly</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Collections</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Create themed groups of bookmarks</li>
                    <li>• Public collections for sharing</li>
                    <li>• Private collections for personal use</li>
                    <li>• Viral sharing with web previews</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Privacy & Control</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Control what you share publicly</li>
                    <li>• Private profiles and collections</li>
                    <li>• Export your data anytime</li>
                    <li>• Delete account and data easily</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact Support */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 text-center text-white">
              <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is here to help you get the most out of Hordle.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:developer@hordle.app"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>📧</span>
                  <span>Email Support</span>
                </a>
                
                <a
                  href="mailto:developer@hordle.app"
                  className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>💭</span>
                  <span>Send Feedback</span>
                </a>
              </div>
              
              <p className="text-blue-100 text-sm mt-4">
                We typically respond within 24 hours
              </p>
            </section>

            {/* App Download CTA */}
            <section className="text-center mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
              <p className="text-gray-600 mb-6">Join thousands of people organizing and discovering the web together.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://apps.apple.com/app/hordle"
                  className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Download for iOS
                </a>
                
                <a
                  href="https://play.google.com/store/apps/details?id=app.hordle"
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Download for Android
                </a>
              </div>
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 mt-16">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <img 
                  src="/hordle_icon.svg" 
                  alt="Hordle" 
                  className="w-8 h-8"
                />
                <span className="text-xl font-bold text-gray-900">Hordle</span>
              </div>
              
              <div className="flex space-x-6 text-gray-600">
                <Link href="/privacy" className="hover:text-blue-600 transition-colors">
                  Privacy
                </Link>
                <Link href="/terms" className="hover:text-blue-600 transition-colors">
                  Terms
                </Link>
                <Link href="/help" className="hover:text-blue-600 transition-colors">
                  Help
                </Link>
                <a href="mailto:developer@hordle.app" className="hover:text-blue-600 transition-colors">
                  Contact
                </a>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
              <p>&copy; 2025 Hordle. Made for people who love to discover and share.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}