import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import { CollectionWithProfile, Bookmark } from '../../types/collection'

interface CollectionPageProps {
  collection: CollectionWithProfile | null
  bookmarks: Bookmark[]
  error?: string
}

export default function CollectionPage({ collection, bookmarks, error }: CollectionPageProps) {
  const [isLoading, setIsLoading] = useState(false)

  // Store collection slug for app handoff
  useEffect(() => {
    if (collection) {
      localStorage.setItem('hordle_pending_collection', collection.slug)
    }
  }, [collection])

  const handleDownloadApp = (platform: 'ios' | 'android') => {
    setIsLoading(true)
    
    // Track download attempt
    supabase
      .from('collection_analytics')
      .insert({
        collection_id: collection?.id,
        event_type: 'download_attempt',
        user_agent: navigator.userAgent,
        referrer: window.location.href,
      })
      .then(() => console.log('Analytics tracked'))

    // Redirect to app stores
    const urls = {
      ios: 'https://apps.apple.com/app/hordle', // Replace with your actual App Store URL
      android: 'https://play.google.com/store/apps/details?id=app.hordle', // Replace with your actual Play Store URL
    }

    window.open(urls[platform], '_blank')
    setIsLoading(false)
  }

  if (error || !collection) {
    return (
      <>
        <Head>
          <title>Collection Not Found - Hordle</title>
          <meta name="description" content="This collection might be private or doesn't exist." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-6">
            <div className="mb-8">
              <img 
                src="/hordle_icon.svg" 
                alt="Hordle" 
                className="w-16 h-16 mx-auto mb-4"
              />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Collection Not Found</h1>
            <p className="text-gray-600 mb-8">This collection might be private or doesn't exist.</p>
            <a
              href="https://hordle.app"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              Download Hordle
            </a>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{collection.name} - Shared on Hordle</title>
        <meta name="description" content={`Check out this collection: ${collection.name} with ${collection.bookmark_count} bookmarks`} />
        
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content={`${collection.name} - Shared on Hordle`} />
        <meta property="og:description" content={`Check out this collection with ${collection.bookmark_count} bookmarks`} />
        <meta property="og:url" content={`https://hordle.app/c/${collection.slug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Hordle" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${collection.name} - Shared on Hordle`} />
        <meta name="twitter:description" content={`Check out this collection with ${collection.bookmark_count} bookmarks`} />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/hordle_icon.svg" 
                alt="Hordle" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-gray-900">Hordle</span>
            </div>
            <button
              onClick={() => handleDownloadApp('ios')}
              disabled={isLoading}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Loading...' : 'Get App'}
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 py-8">
          {/* Collection Header */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-start space-x-6">
              {/* Creator Avatar */}
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl"
                style={{ backgroundColor: collection.profiles.theme_color + '20' }}
              >
                {collection.profiles.avatar_emoji}
              </div>
              
              {/* Collection Info */}
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{collection.name}</h1>
                <p className="text-gray-600 mb-4">
                  Curated by <span className="font-semibold">@{collection.profiles.username}</span>
                </p>
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <span>{collection.bookmark_count} bookmarks</span>
                  <span>•</span>
                  <span>{collection.privacy_level === 'public' ? 'Public' : 'Private'} collection</span>
                  <span>•</span>
                  <span>Shared {collection.share_count} times</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bookmark Preview */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Preview Bookmarks</h2>
            {bookmarks.length > 0 ? (
              <div className="space-y-4">
                {bookmarks.slice(0, 3).map((bookmark) => (
                  <div key={bookmark.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {new URL(bookmark.url).hostname.replace('www.', '')}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">{bookmark.url}</p>
                        {bookmark.reason && (
                          <p className="text-sm text-gray-500 italic">"{bookmark.reason}"</p>
                        )}
                        {bookmark.bookmark_tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {bookmark.bookmark_tags.slice(0, 3).map((tag, idx) => (
                              <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                {tag.tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="flex items-center space-x-1 text-sm">
                        <span className={`w-2 h-2 rounded-full ${
                          bookmark.hotness > 0.7 ? 'bg-red-500' : 
                          bookmark.hotness > 0.4 ? 'bg-orange-500' : 'bg-blue-500'
                        }`}></span>
                        <span className="text-gray-500">{Math.round(bookmark.hotness * 100)}%</span>
                      </div>
                    </div>
                  </div>
                ))}
                {bookmarks.length > 3 && (
                  <div className="text-center text-gray-500 text-sm py-4">
                    ... and {bookmarks.length - 3} more bookmarks
                  </div>
                )}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">No bookmarks to preview</p>
            )}
          </div>

          {/* Download CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Join @{collection.profiles.username} on Hordle</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Download Hordle to view this full collection, save your own bookmarks, and discover others with similar interests.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleDownloadApp('ios')}
                disabled={isLoading}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors disabled:opacity-50 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span>Download for iOS</span>
              </button>
              <button
                onClick={() => handleDownloadApp('android')}
                disabled={isLoading}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors disabled:opacity-50 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <span>Download for Android</span>
              </button>
            </div>
            
            <p className="text-blue-100 text-sm mt-6">
              Free to download • Join thousands of collectors
            </p>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 mt-16">
          <div className="max-w-4xl mx-auto px-4 py-8 text-center text-gray-500">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <img 
                src="/hordle_icon.svg" 
                alt="Hordle" 
                className="w-5 h-5"
              />
              <span className="font-semibold">Hordle</span>
            </div>
            <p>&copy; 2025 Hordle. Hoard and organize the web.</p>
          </div>
        </footer>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params as { slug: string }

  try {
    // Fetch collection with profile info
    const { data: collection, error: collectionError } = await supabase
      .from('collections')
      .select(`
        *,
        profiles!inner(username, avatar_emoji, theme_color)
      `)
      .eq('slug', slug)
      .eq('privacy_level', 'public') // Only show public collections
      .single()

    if (collectionError || !collection) {
      return {
        props: {
          collection: null,
          bookmarks: [],
          error: 'Collection not found or private'
        }
      }
    }

    // Fetch some bookmarks for preview
    const { data: bookmarks = [] } = await supabase
      .from('collection_bookmarks')
      .select(`
        bookmark_id,
        bookmarks!inner(
          id, url, hotness, reason, created_at,
          bookmark_tags(tag)
        )
      `)
      .eq('collection_id', collection.id)
      .order('sort_order')
      .limit(5)

    // Flatten the bookmark data
    const flatBookmarks = (bookmarks || []).map(item => item.bookmarks).filter(Boolean)

    // Track page view
    await supabase
      .from('collection_analytics')
      .insert({
        collection_id: collection.id,
        event_type: 'page_view',
      })

    return {
      props: {
        collection,
        bookmarks: flatBookmarks,
      }
    }
  } catch (error) {
    console.error('Error fetching collection:', error)
    return {
      props: {
        collection: null,
        bookmarks: [],
        error: 'Failed to load collection'
      }
    }
  }
}