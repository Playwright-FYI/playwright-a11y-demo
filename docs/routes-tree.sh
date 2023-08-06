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
    
    # Print all file names in the folder without suffix
    find "$folder" -maxdepth 1 -type f -exec basename {} \; | sed 's/\.[^.]*$//' | sed "s|^|$folder/|"
done

# Copy these results into any markdown file
# and use the prompt
# Convert this list to a Markdown list 
# sorted in alphabetical order
# in the form [list-item](/list-item) as link