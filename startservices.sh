#!/bin/bash
node -v
cd /atividade
if [ -f "app.js" ]; then
  echo "app.js encontrado"
else
  echo "app.js não encontrado"
  exit 1
fi
node app.js
