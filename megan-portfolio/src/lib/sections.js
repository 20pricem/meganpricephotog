function formatAltText(filename) {
  return filename
    .replace(/\.[^.]+$/, '')
    .replace(/[_-]+/g, ' ')
    .trim()
}

const files = Object.entries(
  import.meta.glob('../assets/*/*.{jpg,jpeg,png}', { eager: true, query: '?url', import: 'default' })
)
  .map(([path, url]) => {
    const folder = path.split('/').slice(-2, -1)[0]
    return {
      folder,
      src: url,
      alt: formatAltText(path.replace(/^.*[\\/]/, '')),
    }
  })

const sectionImages = files.reduce((acc, image) => {
  acc[image.folder] = acc[image.folder] ?? []
  acc[image.folder].push({ src: image.src, alt: image.alt })
  return acc
}, {})

export default sectionImages
export const portraits = sectionImages.portraits ?? []
export const concerts = sectionImages.concerts ?? []
export const stylized = sectionImages.stylized ?? []
export const graphics = sectionImages.graphics ?? []
export const highlights = sectionImages.highlights ?? []
