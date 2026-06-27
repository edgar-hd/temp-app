const ABOUT_EXTRA_OFFSET = 85
const SMALL_SCREEN_QUERY = '(max-width: 767px)'

function getHeaderOffset() {
    const topBarInner = document.querySelector('.top-bar-inner')
    return topBarInner?.offsetHeight ?? 120
}

export function getAboutScrollTop() {
    const aboutSection = document.getElementById('about')
    const aboutBio = document.getElementById('about-bio')
    if (!aboutSection || !aboutBio) return null

    const scrollY = window.scrollY
    const aboutTop = aboutSection.getBoundingClientRect().top + scrollY
    const bioTop = aboutBio.getBoundingClientRect().top + scrollY
    const isSmall = window.matchMedia(SMALL_SCREEN_QUERY).matches
    const headerOffset = getHeaderOffset()

    const colorTop = aboutTop - headerOffset
    const bioTopAligned = bioTop - headerOffset

    const top = isSmall ? colorTop : bioTopAligned
    return Math.max(0, top + ABOUT_EXTRA_OFFSET)
}

export function scrollToAbout({ behavior = 'smooth' } = {}) {
    const top = getAboutScrollTop()
    if (top === null) return false

    window.scrollTo({ top, behavior })
    return true
}
