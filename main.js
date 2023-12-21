import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {
  thresholds: {},
  scenarios: {
    Scenario_1: {
      executor: 'constant-vus',
      gracefulStop: '2m',
      duration: '5m',
      vus: 12,
      exec: 'scenario_1',
    },
  },
}

export function scenario_1() {
  let response

  group('page_2 - https://maltherapie-bubikon.ch/index.html', function () {
    response = http.get('https://maltherapie-bubikon.ch/index.html', {
      headers: {
        host: 'maltherapie-bubikon.ch',
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'maltherapie-bubikon.ch',
        connection: 'keep-alive',
        'upgrade-insecure-requests': '1',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
      },
    })
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-includes/css/dist/block-library/style.min.css%3Fver=6.3.css',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: 'text/css,*/*;q=0.1',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'style',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/themes/hello-elementor/style.min.css%3Fver=2.7.1.css',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: 'text/css,*/*;q=0.1',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'style',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/themes/hello-elementor/theme.min.css%3Fver=2.7.1.css',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: 'text/css,*/*;q=0.1',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'style',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/plugins/elementor/assets/css/frontend-lite.min.css%3Fver=3.12.2.css',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: 'text/css,*/*;q=0.1',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'style',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/uploads/elementor/css/post-5.css%3Fver=1692029049.css',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: 'text/css,*/*;q=0.1',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'style',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css%3Fver=5.18.0.css',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: 'text/css,*/*;q=0.1',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'style',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/plugins/elementor/assets/lib/swiper/css/swiper.min.css%3Fver=5.3.6.css',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: 'text/css,*/*;q=0.1',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'style',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/uploads/elementor/css/global.css%3Fver=1692029190.css',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: 'text/css,*/*;q=0.1',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'style',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/uploads/elementor/css/post-12.css%3Fver=1692029190.css',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: 'text/css,*/*;q=0.1',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'style',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://fonts.googleapis.com/css?family=Montserrat%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&display=swap&ver=6.3',
      {
        headers: {
          host: 'fonts.googleapis.com',
          accept: 'text/css,*/*;q=0.1',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'fonts.googleapis.com',
          connection: 'keep-alive',
          'sec-fetch-dest': 'style',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-includes/js/jquery/jquery.min.js%3Fver=3.7.0',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-includes/js/jquery/jquery-migrate.min.js%3Fver=3.4.1',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/uploads/2022/11/elementor-Willkommen-2048x1152.jpg',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: 'image/avif,image/webp,*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'image',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/uploads/2022/11/Homepage-Kids-286x300.jpg',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: 'image/avif,image/webp,*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'image',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/uploads/2022/11/Website-Erwachsene-300x225.jpeg',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: 'image/avif,image/webp,*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'image',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/plugins/elementor/assets/lib/animations/animations.min.css%3Fver=3.12.2.css',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: 'text/css,*/*;q=0.1',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'style',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/themes/hello-elementor/assets/js/hello-frontend.min.js%3Fver=1.0.0',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js%3Fver=3.12.2',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/plugins/elementor/assets/js/frontend-modules.min.js%3Fver=3.12.2',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min.js%3Fver=4.0.2',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-includes/js/jquery/ui/core.min.js%3Fver=1.13.2',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/plugins/elementor/assets/js/frontend.min.js%3Fver=3.12.2',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2',
      {
        headers: {
          host: 'fonts.gstatic.com',
          accept: 'application/font-woff2;q=1.0,application/font-woff;q=0.9,*/*;q=0.8',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'identity',
          origin: 'https://maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'font',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
        },
      }
    )
    response = http.get('https://maltherapie-bubikon.ch/wp-content/uploads/2022/11/IMG_3912.jpeg', {
      headers: {
        host: 'maltherapie-bubikon.ch',
        accept: 'image/avif,image/webp,*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'maltherapie-bubikon.ch',
        connection: 'keep-alive',
        'sec-fetch-dest': 'image',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/uploads/2022/11/IMG_3912-150x150.jpeg',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: 'image/avif,image/webp,*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'image',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/plugins/elementor/assets/js/text-editor.2c35aafbe5bf0e127950.bundle.min.js',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    sleep(10.7)
  })

  group('page_3 - https://maltherapie-bubikon.ch/index.html%3Fp=14.html', function () {
    response = http.get('https://maltherapie-bubikon.ch/index.html%3Fp=14.html', {
      headers: {
        host: 'maltherapie-bubikon.ch',
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'maltherapie-bubikon.ch',
        connection: 'keep-alive',
        'upgrade-insecure-requests': '1',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
      },
    })
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/uploads/elementor/css/post-14.css%3Fver=1692029353.css',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: 'text/css,*/*;q=0.1',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'style',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-includes/js/jquery/jquery.min.js%3Fver=3.7.0',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-includes/js/jquery/jquery-migrate.min.js%3Fver=3.4.1',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/themes/hello-elementor/assets/js/hello-frontend.min.js%3Fver=1.0.0',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js%3Fver=3.12.2',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/plugins/elementor/assets/js/frontend-modules.min.js%3Fver=3.12.2',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min.js%3Fver=4.0.2',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-includes/js/jquery/ui/core.min.js%3Fver=1.13.2',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/plugins/elementor/assets/js/frontend.min.js%3Fver=3.12.2',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get('https://maltherapie-bubikon.ch/wp-content/uploads/2022/11/IMG_3912.jpeg', {
      headers: {
        host: 'maltherapie-bubikon.ch',
        accept: 'image/avif,image/webp,*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'maltherapie-bubikon.ch',
        connection: 'keep-alive',
        'sec-fetch-dest': 'image',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/uploads/2022/11/IMG_3912-150x150.jpeg',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: 'image/avif,image/webp,*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'image',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/plugins/elementor/assets/js/text-editor.2c35aafbe5bf0e127950.bundle.min.js',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    sleep(5.6)
  })

  group('page_4 - https://maltherapie-bubikon.ch/index.html%3Fp=18.html', function () {
    response = http.get('https://maltherapie-bubikon.ch/index.html%3Fp=18.html', {
      headers: {
        host: 'maltherapie-bubikon.ch',
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'maltherapie-bubikon.ch',
        connection: 'keep-alive',
        'upgrade-insecure-requests': '1',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
      },
    })
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/uploads/elementor/css/post-18.css%3Fver=1692029354.css',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: 'text/css,*/*;q=0.1',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'style',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-includes/js/jquery/jquery.min.js%3Fver=3.7.0',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-includes/js/jquery/jquery-migrate.min.js%3Fver=3.4.1',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/themes/hello-elementor/assets/js/hello-frontend.min.js%3Fver=1.0.0',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js%3Fver=3.12.2',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/plugins/elementor/assets/js/frontend-modules.min.js%3Fver=3.12.2',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min.js%3Fver=4.0.2',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-includes/js/jquery/ui/core.min.js%3Fver=1.13.2',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/plugins/elementor/assets/js/frontend.min.js%3Fver=3.12.2',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get('https://maltherapie-bubikon.ch/wp-content/uploads/2022/11/IMG_3912.jpeg', {
      headers: {
        host: 'maltherapie-bubikon.ch',
        accept: 'image/avif,image/webp,*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'maltherapie-bubikon.ch',
        connection: 'keep-alive',
        'sec-fetch-dest': 'image',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/uploads/2022/11/IMG_3912-150x150.jpeg',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: 'image/avif,image/webp,*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'image',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/plugins/elementor/assets/js/text-editor.2c35aafbe5bf0e127950.bundle.min.js',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    sleep(1)
  })

  group('page_5 - https://maltherapie-bubikon.ch/index.html%3Fp=16.html', function () {
    response = http.get('https://maltherapie-bubikon.ch/index.html%3Fp=16.html', {
      headers: {
        host: 'maltherapie-bubikon.ch',
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'maltherapie-bubikon.ch',
        connection: 'keep-alive',
        'upgrade-insecure-requests': '1',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
      },
    })
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/uploads/elementor/css/post-16.css%3Fver=1692029357.css',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: 'text/css,*/*;q=0.1',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'style',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-includes/js/jquery/jquery.min.js%3Fver=3.7.0',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-includes/js/jquery/jquery-migrate.min.js%3Fver=3.4.1',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/uploads/2022/11/IMG_2085-300x225.jpg',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: 'image/avif,image/webp,*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'image',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/uploads/2022/11/IMG_2086-300x225.jpg',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: 'image/avif,image/webp,*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'image',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/uploads/2022/11/IMG_2093-300x225.jpg',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: 'image/avif,image/webp,*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'image',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/themes/hello-elementor/assets/js/hello-frontend.min.js%3Fver=1.0.0',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js%3Fver=3.12.2',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/plugins/elementor/assets/js/frontend-modules.min.js%3Fver=3.12.2',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min.js%3Fver=4.0.2',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-includes/js/jquery/ui/core.min.js%3Fver=1.13.2',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/plugins/elementor/assets/js/frontend.min.js%3Fver=3.12.2',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/uploads/2022/11/IMG_2095-300x201.jpeg',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: 'image/avif,image/webp,*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'image',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get('https://maltherapie-bubikon.ch/wp-content/uploads/2022/11/IMG_3912.jpeg', {
      headers: {
        host: 'maltherapie-bubikon.ch',
        accept: 'image/avif,image/webp,*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'maltherapie-bubikon.ch',
        connection: 'keep-alive',
        'sec-fetch-dest': 'image',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/uploads/2022/11/IMG_3912-150x150.jpeg',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: 'image/avif,image/webp,*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'image',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    sleep(1.5)
  })

  group('page_6 - https://maltherapie-bubikon.ch/index.html%3Fp=300.html', function () {
    response = http.get('https://maltherapie-bubikon.ch/index.html%3Fp=300.html', {
      headers: {
        host: 'maltherapie-bubikon.ch',
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'maltherapie-bubikon.ch',
        connection: 'keep-alive',
        'upgrade-insecure-requests': '1',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
      },
    })
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/uploads/elementor/css/post-300.css%3Fver=1692029357.css',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: 'text/css,*/*;q=0.1',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'style',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-includes/js/jquery/jquery.min.js%3Fver=3.7.0',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-includes/js/jquery/jquery-migrate.min.js%3Fver=3.4.1',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/uploads/2022/11/IMG_2467-300x300.jpg',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: 'image/avif,image/webp,*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'image',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/themes/hello-elementor/assets/js/hello-frontend.min.js%3Fver=1.0.0',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js%3Fver=3.12.2',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/plugins/elementor/assets/js/frontend-modules.min.js%3Fver=3.12.2',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min.js%3Fver=4.0.2',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-includes/js/jquery/ui/core.min.js%3Fver=1.13.2',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/plugins/elementor/assets/js/frontend.min.js%3Fver=3.12.2',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get('https://maltherapie-bubikon.ch/wp-content/uploads/2022/11/IMG_3912.jpeg', {
      headers: {
        host: 'maltherapie-bubikon.ch',
        accept: 'image/avif,image/webp,*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'maltherapie-bubikon.ch',
        connection: 'keep-alive',
        'sec-fetch-dest': 'image',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/uploads/2022/11/IMG_3912-150x150.jpeg',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: 'image/avif,image/webp,*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'image',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/plugins/elementor/assets/js/text-editor.2c35aafbe5bf0e127950.bundle.min.js',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    sleep(2.7)
  })

  group('page_7 - https://maltherapie-bubikon.ch/index.html', function () {
    response = http.get('https://maltherapie-bubikon.ch/index.html', {
      headers: {
        host: 'maltherapie-bubikon.ch',
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'maltherapie-bubikon.ch',
        connection: 'keep-alive',
        'upgrade-insecure-requests': '1',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
      },
    })
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-includes/js/jquery/jquery.min.js%3Fver=3.7.0',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-includes/js/jquery/jquery-migrate.min.js%3Fver=3.4.1',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/themes/hello-elementor/assets/js/hello-frontend.min.js%3Fver=1.0.0',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js%3Fver=3.12.2',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/plugins/elementor/assets/js/frontend-modules.min.js%3Fver=3.12.2',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get('https://maltherapie-bubikon.ch/wp-content/uploads/2022/11/IMG_3912.jpeg', {
      headers: {
        host: 'maltherapie-bubikon.ch',
        accept: 'image/avif,image/webp,*/*',
        'accept-language': 'de,en-US;q=0.7,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        'alt-used': 'maltherapie-bubikon.ch',
        connection: 'keep-alive',
        'sec-fetch-dest': 'image',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/uploads/2022/11/IMG_3912-150x150.jpeg',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: 'image/avif,image/webp,*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'image',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    response = http.get(
      'https://maltherapie-bubikon.ch/wp-content/plugins/elementor/assets/js/text-editor.2c35aafbe5bf0e127950.bundle.min.js',
      {
        headers: {
          host: 'maltherapie-bubikon.ch',
          accept: '*/*',
          'accept-language': 'de,en-US;q=0.7,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          'alt-used': 'maltherapie-bubikon.ch',
          connection: 'keep-alive',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
  })
}
