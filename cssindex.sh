npm run build
fullfile=$(ls dist/assets/index*.css)
filename="${fullfile##*/}"
elem=$(sed -n 's/.*<link href="dist\/assets\/index-\(.*\).css" rel="stylesheet">.*/\1/p' index.html)
echo $elem
for html in *html
do
eval "sed -i 's/index-${elem}.css/${filename}/g' $html"
done