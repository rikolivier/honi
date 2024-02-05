// --- START, eleventy-img
function imageShortcode(src, alt, sizes="(min-width: 1024px) 100vw, 50vw") {
console.log(`Generating image(s) from: ${src}`)
let options = {
widths: [600, 900, 1500],
formats: ["webp", "jpeg"],
urlPath: "/images/",
outputDir: "./_site/images/",
filenameFormat: function (id, src, width, format, options) {
const extension = path.extname(src)
const name = path.basename(src, extension)
return `${name}-${width}w.${format}`
}
}

// generate images
Image(src, options)

let imageAttributes = {
alt,
sizes,
loading: "lazy",
decoding: "async",
}
// get metadata
metadata = Image.statsSync(src, options)
return Image.generateHTML(metadata, imageAttributes)
}
eleventyConfig.addShortcode("image", imageShortcode)
// --- END, eleventy-img