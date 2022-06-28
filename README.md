ENCODE VIDEO for animation – `ffmpeg -i <filename>.mp4 -movflags faststart -vcodec libx264 -crf 23 -g 1 -pix_fmt yuv420p <filename>.mp4`

ENCODE VIDEO for smooth animation `ffmpeg -i input.mp4 -vcodec libx264 -pix_fmt yuv420p -profile:v baseline -level 3 -an -vf "scale=-1:1440, reverse" -preset veryslow -g 2 output.mp4`
