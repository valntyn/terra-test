export interface Root {
  id: number
  title: string
  text?: string
  image?: string
  url?: string
  active: number | null
  sort_order?: number
  created_at?: string
  updated_at?: string
  deleted_at?: any
}
