export interface Collection {
    id: string
    profile_id: string
    name: string
    slug: string
    privacy_level: string
    bookmark_count: number
    share_count: number
    created_at: string
    updated_at: string
  }
  
  export interface CollectionWithProfile extends Collection {
    profiles: {
      username: string
      avatar_emoji: string
      theme_color: string
    }
  }
  
  export interface Bookmark {
    id: string
    url: string
    hotness: number
    reason?: string
    created_at: string
    bookmark_tags: { tag: string }[]
  }