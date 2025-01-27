import sharp from 'sharp';

const inputPath = './prisma/ERD.svg'; // Path to your SVG file
const outputPath = './prisma/ERD.png';

sharp(inputPath)
  .png()
  .toFile(outputPath)
  .then(() => {
    console.log('Converted SVG to PNG successfully!');
  })
  .catch((err) => {
    console.error('Error converting SVG to PNG:', err);
  });
