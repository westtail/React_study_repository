#!/bin/bash
read -p "REACT勉強 up or down" DATA

case "$DATA" in
  [up]*) 
    open -a Docker
    open -a Kindle
    #code ./react-study
    open http://localhost:3000/
  ;;

  [down]*)  
    osascript -e 'quit app "Docker"'
  ;;
  *) echo "up or down"
esac

#docker-compose up -d
#docker-compose down