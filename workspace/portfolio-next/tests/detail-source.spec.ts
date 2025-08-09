import { test, expect } from '@playwright/test'

// This checks that HTML contains the title without client JS
// (indicative of SSG rather than empty root)

test('project detail is SSG-rendered', async ({ page, request }) => {
  const res = await request.get('/projects/envision')
  expect(res.ok()).toBeTruthy()
  const html = await res.text()
  expect(html).toContain('Envision')
})