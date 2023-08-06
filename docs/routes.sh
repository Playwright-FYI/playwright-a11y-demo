#!/bin/bash

# Check if argument is provided
if [ -z "$1" ]
    then
        echo "Please provide a path name as argument"
        exit 1
fi

# Get a listing of all subfolder paths recursively
folders=$(find "$1" -type d)

# Loop through each folder and print in markdown format
for folder in $folders
do
    # Get the folder name
    folder_name=$(basename "$folder")
    
    # Print in markdown format
    echo "[$1/$folder_name]($folder)"
done


# ------------------------------
# 🤖 | Copilot-generated with this Prompt
# Create a bash script that, 
# given a path name as argument => we'll call it root
# gets a listing of all subfolder paths recursively => one per line
# then writes lines to console => in markdown format
# where each line has the format: [root-name/folder-name](folder-path)
# e.g. given argument "./bootstrap" => output line example is [bootstrap/album](/bootstrap/album)
# ------------------------------