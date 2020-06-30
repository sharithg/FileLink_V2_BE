#!/bin/bash

BUILD_SCRIPS_DIRECTORY="./build/static/js/"
red=`tput setaf 1`
green=`tput setaf 2`
reset=`tput sgr0`
if [ -d "$BUILD_SCRIPS_DIRECTORY" ]; then
		printf "Found build folder\n\n"
	else
		printf "No build folder, running ${green}npm run build${reset}\n\n"
		npm run build
fi
printf "Moving chunks...\n\n"
mainchunkregex=".[^.]+.chunk.js$"
numchunks=0
for file in ./build/static/js/*; do
	if [[ $file =~ $mainchunkregex && ($numchunks -eq 0) ]]; then
		numchunks=$((numchunks + 1))
		printf "moving ${red}$file${green} --> ${red}../../static/dashboard_ui/js/main.dashboard_vendor.chunk.js${reset}\n\n"
		cp $file ../../static/dashboard_ui/js/main.dashboard_vendor.chunk.js
	elif [[ $file =~ $mainchunkregex && ($numchunks -eq 1) ]]; then
		printf "moving ${red}$file${green} --> ${red}../../static/dashboard_ui/js/main.dashboard_app.chunk.js${reset}\n\n"
		cp $file ../../static/dashboard_ui/js/main.dashboard_app.chunk.js
	fi
done
printf "Removing build folder...\n\n"
rm -r "./build"
printf "Done\n\n"