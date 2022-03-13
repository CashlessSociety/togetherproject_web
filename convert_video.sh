# ffmpeg -i mexico_city.mp4 -y -c:v h264 -ss 00:00:00 -t 00:00:16  -an -r:v 24 -b:v 1500k -filter:v setpts=2.0*PTS,minterpolate='fps=20',scale=1920:-1 src/assets/img/output.mp4
# ffmpeg -i mexico_city.mp4 -y -c:v libtheora -ss 00:00:00 -t 00:00:16  -an -r:v 24 -b:v 1500k -filter:v setpts=2.0*PTS,minterpolate='fps=20',scale=1920:-1 src/assets/img/output.ogv
# ffmpeg -i mexico_city.mp4 -y -c:v libvpx -ss 00:00:00 -t 00:00:16  -an -r:v 24 -b:v 1500k -filter:v setpts=2.0*PTS,minterpolate='fps=20',scale=1920:-1 src/assets/img/output.webm

# ffmpeg -i empty_spanish.mp4 -y -c:v h264 -ss 00:00:00 -t 00:00:16  -an -r:v 24 -b:v 1500k -filter:v scale=1920:-1 src/assets/img/output.mp4
# ffmpeg -i empty_spanish.mp4 -y -c:v libtheora -ss 00:00:00 -t 00:00:16  -an -r:v 24 -b:v 1500k -filter:v scale=1920:-1 src/assets/img/output.ogv
# ffmpeg -i empty_spanish.mp4 -y -c:v libvpx -ss 00:00:00 -t 00:00:16  -an -r:v 24 -b:v 1500k -filter:v scale=1920:-1 src/assets/img/output.webm


# ffmpeg -i roundabout-preview.mp4 -y -c:v h264 -an -r:v 24 -b:v 1500k -filter:v setpts=3.0*PTS,minterpolate='fps=20',scale=1920:-1 src/assets/img/output.mp4
# ffmpeg -i roundabout-preview.mp4 -y -c:v libtheora -an -r:v 24 -b:v 1500k -filter:v setpts=3.0*PTS,minterpolate='fps=20',scale=1920:-1 src/assets/img/output.ogv
# ffmpeg -i roundabout-preview.mp4 -y -c:v libvpx -an -r:v 24 -b:v 1500k -filter:v setpts=3.0*PTS,minterpolate='fps=20',scale=1920:-1 src/assets/img/output.webm


ffmpeg -i youin.mp4 -y -c:v h264 -an -b:v 1500k src/assets/img/output.mp4
ffmpeg -i youin.mp4 -y -c:v libtheora -an -b:v 1500k src/assets/img/output.ogv
ffmpeg -i youin.mp4 -y -c:v libvpx -an -b:v 1500k src/assets/img/output.webm