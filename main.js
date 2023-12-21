import { sleep, group } from 'k6'
import http from 'k6/http'
import { FormData } from 'https://jslib.k6.io/formdata/0.0.2/index.js'

export const options = {
  thresholds: {},
  scenarios: {
    Scenario_1: {
      executor: 'ramping-vus',
      gracefulStop: '2m',
      stages: [
        { target: 300, duration: '1m' },
        { target: 900, duration: '15s' },
        { target: 1000, duration: '8m 45s' },
      ],
      startVUs: 64,
      gracefulRampDown: '30s',
      exec: 'scenario_1',
    },
  },
}

export function scenario_1() {
  let formData, response

  group('page_1 - https://preview.eniv.app/', function () {
    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(1)
    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(1)
    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(1)
    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(0.9)
    response = http.get('https://preview.eniv.app/random.php', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
  })

  group('page_2 - https://preview.eniv.app/random.php', function () {
    response = http.get('https://preview.eniv.app/index.css', {
      headers: {
        host: 'preview.eniv.app',
        accept: 'text/css,*/*;q=0.1',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'style',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    response = http.get('https://preview.eniv.app/public/fa/css/fontawesome.css', {
      headers: {
        host: 'preview.eniv.app',
        accept: 'text/css,*/*;q=0.1',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'style',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    response = http.get('https://preview.eniv.app/public/fa/css/brands.css', {
      headers: {
        host: 'preview.eniv.app',
        accept: 'text/css,*/*;q=0.1',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'style',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    response = http.get('https://preview.eniv.app/public/fa/css/solid.css', {
      headers: {
        host: 'preview.eniv.app',
        accept: 'text/css,*/*;q=0.1',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'style',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    response = http.get('https://preview.eniv.app/public/fa/css/regular.css', {
      headers: {
        host: 'preview.eniv.app',
        accept: 'text/css,*/*;q=0.1',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'style',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    response = http.get('https://preview.eniv.app/public/font/kys4sxr.css', {
      headers: {
        host: 'preview.eniv.app',
        accept: 'text/css,*/*;q=0.1',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'style',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    response = http.get('https://preview.eniv.app/api/videos/randomVideo/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    response = http.get('https://preview.eniv.app/api/videos/randomVideo/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    response = http.get('https://eniv.app/fav/apple-touch-icon.png', {
      headers: {
        host: 'eniv.app',
        accept: 'image/avif,image/webp,*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'image',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-site',
      },
    })
    response = http.get('https://eniv.app/fav/favicon-16x16.png', {
      headers: {
        host: 'eniv.app',
        accept: 'image/avif,image/webp,*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'image',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-site',
      },
    })
    response = http.get(
      'https://p.typekit.net/p.css?s=1&k=kys4sxr&ht=tk&f=15511&a=156134852&app=typekit&e=css',
      {
        headers: {
          host: 'p.typekit.net',
          accept: 'text/css,*/*;q=0.1',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          connection: 'keep-alive',
          'sec-fetch-dest': 'style',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
        },
      }
    )
    sleep(0.6)
    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(1)
    response = http.get('https://preview.eniv.app/api/videos/randomVideo/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    response = http.get('https://preview.eniv.app/api/videos/randomVideo/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    // (clone)
    response = http.get('https://preview.eniv.app/api/videos/randomVideo/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(0.8)
    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(0.5)
    response = http.get('https://preview.eniv.app/api/videos/randomVideo/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    response = http.get('https://preview.eniv.app/api/videos/randomVideo/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(1)
    response = http.get('https://preview.eniv.app/api/videos/randomVideo/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    response = http.get('https://preview.eniv.app/api/videos/randomVideo/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(0.8)
    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    response = http.get('https://preview.eniv.app/api/videos/randomVideo/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    response = http.get('https://preview.eniv.app/api/videos/randomVideo/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(0.6)
    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(0.8)
    response = http.get('https://preview.eniv.app/api/videos/randomVideo/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    response = http.get('https://preview.eniv.app/api/videos/randomVideo/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(0.8)
    response = http.get('https://preview.eniv.app/api/videos/randomVideo/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    response = http.get('https://preview.eniv.app/api/videos/randomVideo/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(0.7)
    response = http.get('https://preview.eniv.app/feed.php', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
  })

  group('page_3 - https://preview.eniv.app/feed.php', function () {
    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    response = http.get('https://eniv.app/fav/apple-touch-icon.png', {
      headers: {
        host: 'eniv.app',
        accept: 'image/avif,image/webp,*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'image',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-site',
      },
    })
    response = http.get('https://eniv.app/fav/favicon-16x16.png', {
      headers: {
        host: 'eniv.app',
        accept: 'image/avif,image/webp,*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'image',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-site',
      },
    })
    sleep(1)
    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(0.7)
    response = http.get('https://preview.eniv.app/account.php', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
  })

  group('page_4 - https://preview.eniv.app/account.php', function () {
    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.get('https://eniv.app/fav/apple-touch-icon.png', {
      headers: {
        host: 'eniv.app',
        accept: 'image/avif,image/webp,*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'image',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-site',
      },
    })

    response = http.get('https://eniv.app/fav/favicon-16x16.png', {
      headers: {
        host: 'eniv.app',
        accept: 'image/avif,image/webp,*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'image',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-site',
      },
    })

    response = http.get('https://preview.eniv.app/api/account/stats/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.get('https://preview.eniv.app/api/globalstats/accountscreated/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(0.8)

    response = http.get('https://preview.eniv.app/api/account/stats/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.get('https://preview.eniv.app/api/globalstats/accountscreated/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(0.7)

    response = http.get('https://preview.eniv.app/api/account/stats/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.get('https://preview.eniv.app/api/globalstats/accountscreated/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.get('https://preview.eniv.app/api/account/stats/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.get('https://preview.eniv.app/api/globalstats/accountscreated/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(0.6)

    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.get('https://preview.eniv.app/api/account/stats/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.get('https://preview.eniv.app/api/globalstats/accountscreated/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(0.7)

    formData = new FormData()
    formData.boundary = '---------------------------305907746922035276053885490995'
    formData.append('username', 'obvTiger')
    formData.append('password', 'dededed')

    response = http.post('https://preview.eniv.app/api/account/session/create/', formData.body(), {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'content-type':
          'multipart/form-data; boundary=---------------------------305907746922035276053885490995',
        origin: 'https://preview.eniv.app',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.get('https://preview.eniv.app/api/account/stats/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.get('https://preview.eniv.app/api/globalstats/accountscreated/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.get('https://preview.eniv.app/account.php', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.get('https://eniv.app/fav/apple-touch-icon.png', {
      headers: {
        host: 'eniv.app',
        accept: 'image/avif,image/webp,*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'image',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-site',
      },
    })

    response = http.get('https://eniv.app/fav/favicon-16x16.png', {
      headers: {
        host: 'eniv.app',
        accept: 'image/avif,image/webp,*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'image',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-site',
      },
    })

    response = http.get('https://preview.eniv.app/api/account/stats/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.get('https://preview.eniv.app/api/globalstats/accountscreated/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(0.5)

    response = http.get('https://preview.eniv.app/api/account/stats/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.get('https://preview.eniv.app/api/globalstats/accountscreated/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(0.6)

    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.get('https://preview.eniv.app/api/account/stats/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.get('https://preview.eniv.app/api/globalstats/accountscreated/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(0.8)

    response = http.get('https://preview.eniv.app/api/account/stats/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.get('https://preview.eniv.app/api/globalstats/accountscreated/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(0.7)

    response = http.get('https://preview.eniv.app/api/account/stats/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.get('https://preview.eniv.app/api/globalstats/accountscreated/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.get('https://preview.eniv.app/api/account/stats/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.get('https://preview.eniv.app/api/globalstats/accountscreated/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(0.6)

    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.get('https://preview.eniv.app/api/account/stats/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.get('https://preview.eniv.app/api/globalstats/accountscreated/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.get('https://preview.eniv.app/api/account/session/destroy/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.post(
      'https://preview.eniv.app/cdn-cgi/rum?',
      '{"resources":[],"referrer":"https://preview.eniv.app/feed.php","eventType":1,"firstPaint":0,"firstContentfulPaint":2176,"startTime":1703169036826,"versions":{"fl":"2023.10.0","js":"2023.10.0","timings":1},"pageloadId":"8822972b-3f2e-46c2-9c0b-c06ef9b033e7","location":"https://preview.eniv.app/account.php","timingsV2":{"nextHopProtocol":"h2"},"siteToken":"3e434a3218294419a8be8c4ff9fed34e","st":2}',
      {
        headers: {
          host: 'preview.eniv.app',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'content-type': 'application/json',
          origin: 'https://preview.eniv.app',
          'alt-used': 'preview.eniv.app',
          connection: 'keep-alive',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )

    response = http.get('https://preview.eniv.app/account.php#', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.get('https://preview.eniv.app/account.php', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.get('https://eniv.app/fav/apple-touch-icon.png', {
      headers: {
        host: 'eniv.app',
        accept: 'image/avif,image/webp,*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'image',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-site',
      },
    })

    response = http.get('https://eniv.app/fav/favicon-16x16.png', {
      headers: {
        host: 'eniv.app',
        accept: 'image/avif,image/webp,*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'image',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-site',
      },
    })

    response = http.get('https://preview.eniv.app/api/account/stats/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.get('https://preview.eniv.app/api/globalstats/accountscreated/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.post(
      'https://preview.eniv.app/cdn-cgi/rum?',
      '{"resources":[],"referrer":"https://preview.eniv.app/account.php","eventType":1,"firstPaint":0,"firstContentfulPaint":2176,"startTime":1703169036826,"versions":{"fl":"2023.10.0","js":"2023.10.0","timings":1},"pageloadId":"81478b5e-b346-44a0-a7dd-c41a9d3df3d0","location":"https://preview.eniv.app/account.php","timingsV2":{"nextHopProtocol":"h2"},"siteToken":"3e434a3218294419a8be8c4ff9fed34e","st":2}',
      {
        headers: {
          host: 'preview.eniv.app',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'content-type': 'application/json',
          origin: 'https://preview.eniv.app',
          'alt-used': 'preview.eniv.app',
          connection: 'keep-alive',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )

    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.get('https://eniv.app/fav/apple-touch-icon.png', {
      headers: {
        host: 'eniv.app',
        accept: 'image/avif,image/webp,*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'image',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-site',
      },
    })

    response = http.get('https://eniv.app/fav/favicon-16x16.png', {
      headers: {
        host: 'eniv.app',
        accept: 'image/avif,image/webp,*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'image',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-site',
      },
    })
    sleep(0.6)

    response = http.get('https://preview.eniv.app/api/account/stats/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.get('https://preview.eniv.app/api/globalstats/accountscreated/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.get('https://preview.eniv.app/upload.php', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
  })

  group('page_5 - https://preview.eniv.app/upload.php', function () {
    response = http.post(
      'https://preview.eniv.app/cdn-cgi/rum?',
      '{"resources":[],"referrer":"https://preview.eniv.app/account.php","eventType":1,"firstPaint":0,"firstContentfulPaint":2176,"startTime":1703169036826,"versions":{"fl":"2023.10.0","js":"2023.10.0","timings":1},"pageloadId":"879af4c8-62c3-4652-ab88-4dac68336f14","location":"https://preview.eniv.app/account.php","timingsV2":{"nextHopProtocol":"h2"},"siteToken":"3e434a3218294419a8be8c4ff9fed34e","st":2}',
      {
        headers: {
          host: 'preview.eniv.app',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'content-type': 'application/json',
          origin: 'https://preview.eniv.app',
          'alt-used': 'preview.eniv.app',
          connection: 'keep-alive',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )

    response = http.get('https://eniv.app/fav/apple-touch-icon.png', {
      headers: {
        host: 'eniv.app',
        accept: 'image/avif,image/webp,*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'image',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-site',
      },
    })

    response = http.get('https://eniv.app/fav/favicon-16x16.png', {
      headers: {
        host: 'eniv.app',
        accept: 'image/avif,image/webp,*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'image',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-site',
      },
    })

    response = http.get('https://preview.eniv.app/feed.php', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
  })

  group('page_6 - https://preview.eniv.app/feed.php', function () {
    response = http.post(
      'https://preview.eniv.app/cdn-cgi/rum?',
      '{"resources":[],"referrer":"https://preview.eniv.app/account.php","eventType":1,"firstPaint":0,"firstContentfulPaint":2176,"startTime":1703169036826,"versions":{"fl":"2023.10.0","js":"2023.10.0","timings":1},"pageloadId":"3e78c52f-abfd-4877-a9f3-29150b812442","location":"https://preview.eniv.app/upload.php","timingsV2":{"nextHopProtocol":"h2"},"siteToken":"3e434a3218294419a8be8c4ff9fed34e","st":2}',
      {
        headers: {
          host: 'preview.eniv.app',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'content-type': 'application/json',
          origin: 'https://preview.eniv.app',
          'alt-used': 'preview.eniv.app',
          connection: 'keep-alive',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )

    response = http.get('https://eniv.app/fav/apple-touch-icon.png', {
      headers: {
        host: 'eniv.app',
        accept: 'image/avif,image/webp,*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'image',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-site',
      },
    })

    response = http.get('https://eniv.app/fav/favicon-16x16.png', {
      headers: {
        host: 'eniv.app',
        accept: 'image/avif,image/webp,*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'image',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-site',
      },
    })

    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(0.9)

    sleep(0.8)
    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(1)

    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(1)

    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(1)

    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(1)

    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(1)

    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(1)

    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(1)

    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.get('https://preview.eniv.app/random.php', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
  })

  group('page_7 - https://preview.eniv.app/random.php', function () {
    response = http.post(
      'https://preview.eniv.app/cdn-cgi/rum?',
      '{"resources":[],"referrer":"https://preview.eniv.app/upload.php","eventType":1,"firstPaint":0,"firstContentfulPaint":2176,"startTime":1703169036826,"versions":{"fl":"2023.10.0","js":"2023.10.0","timings":1},"pageloadId":"43f57e06-b666-4e67-949e-4004644d5b7e","location":"https://preview.eniv.app/feed.php","timingsV2":{"nextHopProtocol":"h2"},"siteToken":"3e434a3218294419a8be8c4ff9fed34e","st":2}',
      {
        headers: {
          host: 'preview.eniv.app',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'content-type': 'application/json',
          origin: 'https://preview.eniv.app',
          'alt-used': 'preview.eniv.app',
          connection: 'keep-alive',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )

    response = http.get('https://preview.eniv.app/api/videos/randomVideo/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.get('https://preview.eniv.app/api/videos/randomVideo/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })

    response = http.get('https://eniv.app/fav/apple-touch-icon.png', {
      headers: {
        host: 'eniv.app',
        accept: 'image/avif,image/webp,*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'image',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-site',
      },
    })

    response = http.get('https://eniv.app/fav/favicon-16x16.png', {
      headers: {
        host: 'eniv.app',
        accept: 'image/avif,image/webp,*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'image',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-site',
      },
    })

    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(0.7)

    response = http.get('https://preview.eniv.app/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
  })

  group('page_8 - https://preview.eniv.app/', function () {
    response = http.post(
      'https://preview.eniv.app/cdn-cgi/rum?',
      '{"resources":[],"referrer":"https://preview.eniv.app/feed.php","eventType":1,"firstPaint":0,"firstContentfulPaint":2176,"startTime":1703169036826,"versions":{"fl":"2023.10.0","js":"2023.10.0","timings":1},"pageloadId":"9b727ed4-ec4e-4daa-9abb-4ded86f85c31","location":"https://preview.eniv.app/random.php","timingsV2":{"nextHopProtocol":"h2"},"siteToken":"3e434a3218294419a8be8c4ff9fed34e","st":2}',
      {
        headers: {
          host: 'preview.eniv.app',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'content-type': 'application/json',
          origin: 'https://preview.eniv.app',
          'alt-used': 'preview.eniv.app',
          connection: 'keep-alive',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )

    response = http.get('https://eniv.app/fav/apple-touch-icon.png', {
      headers: {
        host: 'eniv.app',
        accept: 'image/avif,image/webp,*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'image',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-site',
      },
    })

    response = http.get('https://eniv.app/fav/favicon-16x16.png', {
      headers: {
        host: 'eniv.app',
        accept: 'image/avif,image/webp,*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'image',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-site',
      },
    })

    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(1)

    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(1)

    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(1)

    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(1)

    response = http.get('https://preview.eniv.app/api/live/update/', {
      headers: {
        host: 'preview.eniv.app',
        accept: '*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'preview.eniv.app',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
  })
}
