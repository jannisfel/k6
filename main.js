import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {
  thresholds: {},
  scenarios: {
    Scenario_1: {
      executor: 'constant-vus',
      gracefulStop: '30s',
      duration: '10m',
      vus: 1000,
      exec: 'scenario_1',
    },
  },
}

export function scenario_1() {
  let response

  group('page_1 - https://preview.eniv.app/api/videos/feed/create/?count=193', function () {
    response = http.get('https://preview.eniv.app/api/videos/feed/create/?count=193', {
      headers: {
        host: 'preview.eniv.app',
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        connection: 'keep-alive',
        'upgrade-insecure-requests': '1',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'none',
        'sec-fetch-user': '?1',
      },
    })
    // (clone)
    response = http.get('https://preview.eniv.app/api/videos/feed/create/?count=193', {
      headers: {
        host: 'preview.eniv.app',
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        connection: 'keep-alive',
        'upgrade-insecure-requests': '1',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'none',
        'sec-fetch-user': '?1',
      },
    })
    // (clone)
    response = http.get('https://preview.eniv.app/api/videos/feed/create/?count=193', {
      headers: {
        host: 'preview.eniv.app',
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        connection: 'keep-alive',
        'upgrade-insecure-requests': '1',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'none',
        'sec-fetch-user': '?1',
      },
    })
    // (clone)
    response = http.get('https://preview.eniv.app/api/videos/feed/create/?count=193', {
      headers: {
        host: 'preview.eniv.app',
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        connection: 'keep-alive',
        'upgrade-insecure-requests': '1',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'none',
        'sec-fetch-user': '?1',
      },
    })
    // (clone)
    response = http.get('https://preview.eniv.app/api/videos/feed/create/?count=193', {
      headers: {
        host: 'preview.eniv.app',
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        connection: 'keep-alive',
        'upgrade-insecure-requests': '1',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'none',
        'sec-fetch-user': '?1',
      },
    })
    // (clone)
    response = http.get('https://preview.eniv.app/api/videos/feed/create/?count=193', {
      headers: {
        host: 'preview.eniv.app',
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        connection: 'keep-alive',
        'upgrade-insecure-requests': '1',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'none',
        'sec-fetch-user': '?1',
      },
    })
    // (clone)
    response = http.get('https://preview.eniv.app/api/videos/feed/create/?count=193', {
      headers: {
        host: 'preview.eniv.app',
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        connection: 'keep-alive',
        'upgrade-insecure-requests': '1',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'none',
        'sec-fetch-user': '?1',
      },
    })
    // (clone)
    response = http.get('https://preview.eniv.app/api/videos/feed/create/?count=193', {
      headers: {
        host: 'preview.eniv.app',
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        connection: 'keep-alive',
        'upgrade-insecure-requests': '1',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'none',
        'sec-fetch-user': '?1',
      },
    })
    // (clone)
    response = http.get('https://preview.eniv.app/api/videos/feed/create/?count=193', {
      headers: {
        host: 'preview.eniv.app',
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        connection: 'keep-alive',
        'upgrade-insecure-requests': '1',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'none',
        'sec-fetch-user': '?1',
      },
    })
    // (clone)
    response = http.get('https://preview.eniv.app/api/videos/feed/create/?count=193', {
      headers: {
        host: 'preview.eniv.app',
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        connection: 'keep-alive',
        'upgrade-insecure-requests': '1',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'none',
        'sec-fetch-user': '?1',
      },
    })
  })
  sleep(1)
}
