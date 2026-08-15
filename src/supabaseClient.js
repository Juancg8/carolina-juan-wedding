import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://bssgumvydanoyogkgrkq.supabase.co'
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_H0MZ9plUhP7cD3wvF70vig_YCAU0GgY'

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)