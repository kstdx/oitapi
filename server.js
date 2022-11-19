import { serve } from 'server'
import { Hono } from 'hono/mod.ts'
import { cache } from 'hono/middleware.ts'

import * as API from './src/api.js'

const app = new Hono()

/*
app.get(
    '*',
    cache({
        cacheName: Math.random(),
        cacheControl: 'max-age=3600',
        wait: true
    })
)
*/

app.get('/:school', API.viewAll)
app.get('/:school/:category/:path', API.view)

serve(app.fetch)
