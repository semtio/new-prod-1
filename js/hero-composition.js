(function () {
  const heroComposition = {
    targetId: 'heroObjects',
    entry: {
      durationMs: 980,
      defaultShift: 42,
      staggerMs: 95,
    },
    items: [
      {
        id: 'folder',
        src: 'img/folder.png',
        parallax: '17%',
        z: 2,
        left: 57,
        top: 72,
        width: 64,
        rotate: 17,
        desktop: {
          left: 17,
          top: 50,
          width: 166,
          rotate: -7,
        },
        enterDelayMs: 0,
      },
      {
        id: 'paper-1',
        src: 'img/paper-1.png',
        parallax: '12%',
        z: 5,
        left: 48,
        top: 51,
        width: 28,
        rotate: -10,
        desktop: {
          left: 49,
          top: 51,
          width: 155,
          rotate: -11,
        },
        enterDelayMs: 80,
      },
      {
        id: 'paper-2',
        src: 'img/paper-2.png',
        parallax: '14%',
        z: 5,
        left: 60,
        top: 49,
        width: 30,
        rotate: 8,
        desktop: {
          left: 61,
          top: 49,
          width: 155,
          rotate: 9,
        },
        enterDelayMs: 130,
      },
      {
        id: 'calculator',
        // src: 'img/calc.png',
        parallax: '18%',
        z: 6,
        left: 76,
        top: 52,
        width: 29,
        rotate: 4,
        desktop: {
          left: 78,
          top: 51,
          width: 28,
          rotate: 5,
        },
        enterDelayMs: 180,
      },
      {
        id: 'pen',
        src: 'img/pen.png',
        parallax: '20%',
        z: 7,
        left: 66,
        top: 63,
        width: 28,
        rotate: 29,
        desktop: {
          left: 67,
          top: 63,
          width: 25,
          rotate: 31,
        },
        enterDelayMs: 230,
      },
      {
        id: 'mug',
        src: 'img/cup.png',
        parallax: '23%',
        z: 3,
        left: 12,
        top: 39,
        width: 21,
        rotate: -12,
        desktop: {
          left: 14,
          top: 3,
          width: 58,
          rotate: -12,
        },
        enterDelayMs: 290,
      },
    ],
  }

  function setStyleVar(el, name, value) {
    if (value === undefined || value === null || Number.isNaN(value)) return
    el.style.setProperty(name, String(value))
  }

  function buildHeroComposition() {
    const root = document.getElementById(heroComposition.targetId)
    if (!root) return

    root.innerHTML = ''

    heroComposition.items.forEach((item, index) => {
      const img = document.createElement('img')
      img.className = `hero-obj hero-obj--${item.id}`
      img.src = item.src
      img.alt = ''
      img.loading = 'eager'
      img.decoding = 'async'
      img.setAttribute('data-swiper-parallax', item.parallax || '12%')

      setStyleVar(img, '--obj-left', item.left)
      setStyleVar(img, '--obj-top', item.top)
      setStyleVar(img, '--obj-width', item.width)
      setStyleVar(img, '--obj-rotate', item.rotate)
      setStyleVar(img, '--obj-z', item.z)

      const enterDelay = item.enterDelayMs ?? (index * (heroComposition.entry?.staggerMs ?? 95))
      setStyleVar(img, '--obj-enter-delay', `${enterDelay}ms`)
      setStyleVar(img, '--obj-enter-duration', `${heroComposition.entry?.durationMs ?? 980}ms`)
      setStyleVar(img, '--obj-enter-shift', item.enterShift ?? (heroComposition.entry?.defaultShift ?? 42))

      if (item.desktop) {
        setStyleVar(img, '--obj-left-desktop', item.desktop.left)
        setStyleVar(img, '--obj-top-desktop', item.desktop.top)
        setStyleVar(img, '--obj-width-desktop', item.desktop.width)
        setStyleVar(img, '--obj-rotate-desktop', item.desktop.rotate)
      }

      root.appendChild(img)
    })
  }

  window.heroComposition = heroComposition
  buildHeroComposition()
})()
